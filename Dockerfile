FROM ruby:2.7.7

RUN apt-get update -qq \
&& apt-get install -y nodejs postgresql-client

ADD . /Rails-Docker
WORKDIR /Rails-Docker
RUN bundle install
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y yarn
RUN yarn install

EXPOSE 3000

CMD ["bash"]