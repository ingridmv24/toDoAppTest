import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly taskNameInput : Locator;
    readonly addTaskButton : Locator;
    readonly taskCounterElement : Locator;

    constructor(page: Page){
        this.page = page;
        this.taskNameInput = page.locator("#todo");
        this.addTaskButton = page.locator("form button");
        this.taskCounterElement = page.locator(".todohero_section div");

    }

    async navigate(){
        await this.page.goto("http://localhost:3000/");
    }

    async addTask(taskName){
        await this.taskNameInput.fill(taskName);
        await this.addTaskButton.click();
    }

    async getCounterTask()
    {
        let counterTasks = await this.taskCounterElement.nth(1).textContent();

        console.log("Counter:", counterTasks); 
        return counterTasks;
    }
}