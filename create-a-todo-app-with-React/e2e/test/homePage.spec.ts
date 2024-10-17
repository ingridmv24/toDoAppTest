import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ListTasksPage } from "../pages/ListTasksPage";

test(`TC1 - Verify the page title`, async({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();

    let pageTitle = await page.title();

    await expect(page).toHaveTitle(pageTitle);
});

test(`TC2 - Add a task and verify 
    the table contains the test case name`, async ({ page }) => {
    const homePage = new HomePage(page);
    const listTaskPage = new ListTasksPage(page);

    await homePage.navigate();
    await homePage.addTask("tc1");

    let list = await listTaskPage.getListTasksName();
    console.log(list);
    expect(list).toContain("tc1");
});

test(`TC3 - Add a task and mark it as done`, async ({ page }) => {
    const homePage = new HomePage(page);
    const listTaskPage = new ListTasksPage(page);

    await homePage.navigate();
    await homePage.addTask("tc1");

    await listTaskPage.markTask("tc1");

    let taskCounter = await homePage.getCounterTask();
    expect(taskCounter).toEqual("1/1");
});

test(`TC4 - Add a task and delete it`, async ({ page }) => {
    const homePage = new HomePage(page);
    const listTaskPage = new ListTasksPage(page);

    await homePage.navigate();
    await homePage.addTask("tc1");

    await listTaskPage.deleteTask("tc1");
});

test(`TC5 - Add eight tasks which are defined in a list, 
    mark the even tasks as done and check that the counter contains 4/8`, async ({page}) => {

    const homePage = new HomePage(page);
    const listTaskPage = new ListTasksPage(page);

    await homePage.navigate();

    const tasksList = ["dormir", "comer", "estudiar", "hacer ejercicio", "cantar", "ver tv", "caminar", "mercar"];
    for(let i = 0; i < tasksList.length; i++)
    {
        await homePage.addTask(tasksList[i]);
    }

    for(let j = 0; j < tasksList.length; j++)
    {
        
        if(j % 2 == 1){
            await listTaskPage.markTask(tasksList[j]);
        }
    }

    let taskCounter = await homePage.getCounterTask();

    expect(taskCounter).toEqual("4/8");
});

test(`TC6 - Add a task, edit it and verify the task contains the new name`, async({page}) => {
    const homePage = new HomePage(page);
    const listTaskPage = new ListTasksPage(page);

    await homePage.navigate();
    await homePage.addTask("tc1");

    await listTaskPage.editTask("tc1","testing");

    let list = await listTaskPage.getListTasksName();
    expect(list).toContain("testing");
});