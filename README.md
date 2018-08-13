# cuke-jvm
Simple Cucumber JVM framework testing a demo application


## You will need

1. A Java IDE (e.g. Eclipse or IntelliJ IDEA)
2. Java 1.8 JDK
3. Maven
4. Cucumber support for your IDE ([IntelliJ](https://plugins.jetbrains.com/plugin/7212?pr=), [Eclipse](https://cucumber.io/cucumber-eclipse/))

## Get the code

Git:

    git clone https://github.com/bjornedwin/cuke-jvm
    cd cuke-jvm

## Import the project

In Eclipse:

`File > Import > Existing Maven Project`

Then browse to the directory where you downloaded cuke-jvm and you should see the project start importing.

In IntelliJ

`File > Import project`

Then browse to the `pom.xml` file in the directory where you downloaded `cuke-jvm` and open the pom file. The project should now load.

## Run the tests

In Eclipse:

Right-click the project > Run as > Maven test

In IntelliJ

Right-click the project > Run > All tests

You should expect to see all tests/features passing


