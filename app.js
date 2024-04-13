#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.magentaBright("\n\tWelcome to CodeWithSaima - Todo_List Application\n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green("Enter your new Task :")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo_list sucessfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.blue("Do you want to add more task ? "),
            default: "false",
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log(chalk.red("Your updated Todo_list :", todoList));
