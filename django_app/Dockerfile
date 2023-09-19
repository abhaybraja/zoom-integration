FROM python:3.10-slim-buster
ENV APP_HOME=/app
WORKDIR $APP_HOME
# create the app user
RUN addgroup --system abhay && adduser --system --group abhay
RUN addgroup root abhay
# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1
RUN apt-get update

# Install pip requirements
RUN pip install --upgrade pip
COPY django_app/requirements.txt .
RUN pip install -r requirements.txt
COPY django_app/. .

# chown all the files to the app user
RUN chown -R abhay:abhay $APP_HOME
ENTRYPOINT ["entrypoint.sh"]