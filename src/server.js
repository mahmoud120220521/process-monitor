const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let processes = [];
let pid = 1;

// الصفحة الرئيسية
app.get("/", (req, res) => {
    res.send("Process Monitor is running");
});

// إضافة process (عن طريق المتصفح)
app.get("/add-test", (req, res) => {
    const p = {
        id: pid,
        state: "READY"
    };
    pid = pid + 1;
    processes.push(p);
    res.json(p);
});

// تشغيل أول process
app.get("/run", (req, res) => {
    if (processes.length > 0) {
        processes[0].state = "RUNNING";
    }
    res.json(processes);
});

// عرض كل العمليات
app.get("/all", (req, res) => {
    res.json(processes);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
