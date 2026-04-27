async function test() {
    try {
        const res = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fullName: 'Node API Test',
                email: 'node@example.com',
                phone: '9999911111',
                requests: 'Direct fetch test'
            }),
        });
        const data = await res.json();
        console.log('Status:', res.status);
        console.log('Response:', data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
test();
