---
title: "Apache Airflow: SnowflakeOperator"
date: 2021-01-30 11:48:20 +0300
description: Issues When Downloading `snowflake-sqlalchemy`
tags: 
    - Apache Airflow
    - Snowflake
---

If you run into this problem after downloading `snowflake-sqlalchemy` for Apache Airflow:
![Airflow Error](/assets/images/airflow-error.PNG)

That means you probably encountered this error while downloading `snowflake-sqlalchemy`:

![SQLAlchemy Error](/assets/images/snowflake-SQLAlchemy-issue.PNG)

A quick Google search will push you to this [Stackoverflow question](https://stackoverflow.com/questions/67437595/airflow-db-init-error-failed-to-add-operation-for-get-api-v1-connections).

This question is pretty helpful and it should give you the idea that you need to downgrade your SQLAlchmey package. Luckly, the Airflow community is aware of the problem and is working to solve it, [here](https://github.com/dpgaspar/Flask-AppBuilder/issues/1621).

For me, what fixed the issue was downgraing both `sqlalchemy` and `snowflake-sqlalchemy`:
 ```python
pip3 install snowflake-sqlalchemy==1.2.4 sqlalchemy==1.3.24
 ```

