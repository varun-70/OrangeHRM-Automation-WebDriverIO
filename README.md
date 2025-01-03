
# WebdriverIO Automation
Web: OrangeHRM 

Android: MyDemoAppRN

# Work in progress

## Table of Contents

- [Folder Structure](#folder-structure)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)


## Folder Structure
```
OrangeHRM-Automation-WebdriverIO
├── src/
│   ├── config/
│   │   ├── wdio.mobile.conf.js
│   │   ├── wdio.web.conf.js
│   │   └── constants.js
│   ├── pages/
│   │   ├── web/
│   │   │   ├── Login.page.js
│   │   ├── mobile/
│   │   │   │── LoginPage.js
│   ├── test-data/
│   │   ├── apps
│   │   │   └── *.apk
│   │   └── TestData.json
│   ├── tests/
│   │   ├── web/
│   │   │   ├── login.test.js
│   │   ├── mobile/
│   │   │   ├── login.test.js
├── reports/
│   ├── allure-results/
│   ├── screenshots/
│   └── logs/
├── .env
├── .gitignore
├── package.json
└── README.md
```


## Running Tests

## Test Reports

The project uses Allure for test reporting. After running the pageTests, you can generate the Allure reports using the following command:

1. **Generate Allure report:**
    ```sh
    allure report
    ```

2. **Open Allure report:**
    ```sh
    allure serve allure-results 
    ```
   or
   ```shell
   allure serve
   ```

3. **To save report in a single file with report name**
   ```shell
   allure generate -c --single-file allure-results --report-name
   ```

### Report Screenshots

|  |  |
| ----- | ------ |
| ![img.png](docs/images/allureReporting/img_01.png) | ![img_1.png](docs/images/allureReporting/img_02.png)    |
| ![img_2.png](docs/images/allureReporting/img_03.png) | ![img_3.png](docs/images/allureReporting/img_04.png)   |