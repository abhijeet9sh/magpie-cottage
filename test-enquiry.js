const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://kkebfenvfjngpnvygdbf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrZWJmZW52ZmpuZ3BudnlnZGJmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NzAzNjk2NCwiZXhwIjoyMDkyNjEyOTY0fQ.mwnCNNz_2t7lCyLTa_USnLmZ775nNqlE8QbjRC_UoKk');

async function test() {
    const body = {
        fullName: 'Test User',
        email: 'test@example.com',
        phone: '9876543210',
        requests: 'Testing DB'
    };

    const { error } = await supabase
        .from('enquiries')
        .insert({
            name: body.fullName,
            email: body.email,
            phone: body.phone,
            message: body.requests,
            status: 'new'
        });

    if (error) {
        console.error('DB Error:', error);
    } else {
        console.log('Success!');
    }
}

test();
