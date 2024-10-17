import {Locator, Page } from "@playwright/test";

export class ListTasksPage{
    readonly page: Page;
    readonly taskItem : Locator;
    readonly editTaskName : Locator;

    constructor(page: Page){
        this.page = page;
        this.taskItem = page.locator("li");
        this.editTaskName = page.locator("#edit-todo");
        
    }

    async getListTasksName(){
        //console.log('count: ', await this.taskItem.count());
        let list = [];

        for(let i = 0; i < await this.taskItem.count(); i++)
        {
            list.push(await this.taskItem.nth(i).getByRole("paragraph").textContent());
        }
            
        return list;
    }

    async markTask(taskName)
    {

        await this.taskItem.filter({hasText: taskName})
                            .getByRole("button",{name: taskName}).click();
    }

    async deleteTask(taskName)
    {
        await this.taskItem.filter({hasText: taskName})
                            .getByRole("button", {name: "Delete"}).click();
    }

    async editTask(taskName, newTaskName)
    {
        let taskToEdit = await this.taskItem.filter({hasText: taskName});
        
        await taskToEdit.getByRole("button", {name: "Edit"}).click();

        //await this.page.locator('#edit-todo').fill(newTaskName);
        await this.editTaskName.fill(newTaskName);
        
        await this.editTaskName.press("Enter");
    }
}