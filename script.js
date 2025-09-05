const API_URL = 'http://localhost:3000/lunch-menu';

async function fetchMenus() {
    try {
        const res = await fetch(API_URL);
        if(!res.ok) throw new Error('메뉴 조회 실패');
        return await res.json();
    } catch(e) {
        alert(e.message);
        return [];
    }
}

async function fetchMenuById(id) {
    try {
        const res = await fetch(`${API_URL}/${id}`);
        if(!res.ok) throw new Error('상세 메뉴 조회 실패');
        return await res.json();
    } catch(e) {
        alert(e.message);
        return null;
    }
}

async function addMenu(menu) {
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(menu)
        });
        if(!res.ok) throw new Error('메뉴 등록 실패');
        return await res.json();
    } catch(e) {
        alert(e.message);
        return null;
    }
}

