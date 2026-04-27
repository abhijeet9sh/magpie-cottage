const fetch = require('node-fetch');

async function testConstraints() {
    const url = 'http://localhost:3000/api/create-order';

    // Test 1: Invalid Stay Duration (Check Constraint)
    console.log('Testing Test 1: Check-out before Check-in...');
    const res1 = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            amount: 10000,
            bookingDetails: {
                checkIn: '2026-08-10',
                checkOut: '2026-08-05', // INVALID
                name: 'Constraint Test'
            }
        })
    });
    console.log('Test 1 Status:', res1.status);
    console.log('Test 1 Body:', await res1.json());

    // Test 2: First Booking (Valid)
    console.log('\nCreating First Booking (Nov 1-5)...');
    const res2 = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            amount: 47200,
            bookingDetails: {
                checkIn: '2026-11-01',
                checkOut: '2026-11-05',
                nights: 4,
                name: 'Overlap Test'
            }
        })
    });
    console.log('First Booking Status:', res2.status);

    // Test 3: Overlapping Booking (Exclusion Constraint)
    console.log('\nTesting Test 3: Overlapping Booking (Nov 2-4)...');
    const res3 = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            amount: 23600,
            bookingDetails: {
                checkIn: '2026-11-02',
                checkOut: '2026-11-04',
                nights: 2,
                name: 'Conflicting Guest'
            }
        })
    });
    console.log('Test 3 Status:', res3.status);
    console.log('Test 3 Body:', await res3.json());
}

testConstraints();
