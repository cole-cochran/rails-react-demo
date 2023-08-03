# Specify Ruby version
FROM ruby:2.7.7

# Install node and postgres
RUN apt-get update -qq \
&& apt-get install -y nodejs postgresql-client 

# Install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y yarn

# Mkdir and set working directory
ADD . /Rails-Docker
WORKDIR /Rails-Docker

# Bundle install for Gems
RUN bundle install

# Install dependencies
RUN yarn install

# Set port for frontend
EXPOSE 3000

CMD ["bash"]