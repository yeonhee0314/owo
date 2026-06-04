const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// 임시 데이터베이스 (메모리 배열)
let users = [
    { id: 1, name: '구민준', email: 'goo@example.com' },
    { id: 2, name: '김동우', email: 'kim@example.com' },
];

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중
입니다.`);
});

// C 생성 - Create
// R 조회 - Read
// U 수정 - Update
// D 삭제 - Delete

// 유저 생성
app.post("/users", (req, res) => {
    const { name, email } = req.body;
    console.log(name);
    console.log(email);

    if (!name || !email) {
        //http 상태 코드
        // 400 - bad reauest
        return res
            .status(400)
            .json({ message: '이름과 이메일을 모두 입력해주세요.' });
    }
    
    const newId = users[users.length - 1].id + 1;
    const newUser = {
        id: users.length > 0 ? newId : 1,
        name,
        email,
    };
    
    users.push(newUser);

    // 200(OK)
    // 201(Created)
    res.status(201).json({
        message: "사용자가 등록되었습니다.",
        user: newUser,
    })
});

app.get("/users", (req, res) => {
    res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (!user) {
        return res
            .status(404)
            .json({ message: `id가 ${id}인 사용자를 찾을 수 없습니다.` });
    }
    res.status(200).json(user);
    });

app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex == -1) {
        return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    };

    users[userIndex] = {
        id: users[userIndex].id,
        name: name || users[userIndex].name,
        email: email || users[userIndex].email,
    };

    res.status(200).json({
        message: "사용자 정보가 수정되었습니다.",
        user: users[userIndex],
    })
});

app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex == -1) {
        return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    }

    const deleteUser = users.splice(userIndex, 1);

    res.status(200).json({
        message: "사용자가 삭제되었습니다.",
        user: deleteUser[0],
    });
});