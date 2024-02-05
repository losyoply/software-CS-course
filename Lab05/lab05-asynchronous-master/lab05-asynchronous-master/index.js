function get_info() {
    return new Promise((resolve, reject) => {
        let success_rate = Math.random();
        let timer = Math.floor(Math.random() * 1000 + 500);
        if (success_rate > 0.5) {
            let tmp_id = Math.floor(Math.random() * 14000 + 6000);
            setTimeout(() => {
                resolve(tmp_id);
            }, timer);
        } else {
            setTimeout(() => {
                reject('get_info Failed');
            }, timer);
        }
    });
}

function get_firstname() {
    return new Promise((resolve, reject) =>{
    first_name_list = ['Adam', 'Eric', 'Peter'];
    // TODO : generate a success rate
    let rate = Math.random();
    // TODO : generate a timer
    let timer = Math.floor(Math.random() * 1000 + 500);
    // TODO : random select a item from list
    if(rate<0.9)
    {
        let idx = Math.floor(Math.random() * 3);
        setTimeout(
            ()=>
            {resolve(first_name_list[idx]);}, timer
        );
    }
    else
    {
        setTimeout(
            ()=>{reject("FAIL!");}, timer
        );
    }
})

}

function get_lastname() {
    return new Promise((resolve, reject) =>{
    last_name_list = ['Jones', 'Smith', 'Johnson'];
    // TODO : generate a success rate
    let rate = Math.random();
    // TODO : generate a timer
    let timer = Math.floor(Math.random() * 1000 + 500);
    // TODO : random select a item from list
    if(rate<0.9)
    {
        let idx = Math.floor(Math.random() * 3);
        setTimeout(
            ()=>
            {
                resolve(last_name_list[idx]);}, timer
        );
    }
    else
    {
        setTimeout(
            ()=>{reject("FAIL!");}, timer
        );
    }
})
}

function get_username() {
    return new Promise((resolve, reject) =>{
    username_list = ['Toyz', 'Faker', 'Dinter'];
    // TODO : generate a success rate
    let rate = Math.random();
    // TODO : generate a timer
    let timer = Math.floor(Math.random() * 1000 + 500);
    // TODO : random select a item from list
    if(rate<0.9)
    {
        let idx = Math.floor(Math.random() * 3);
        setTimeout(
            ()=>
            {
                resolve(username_list[idx]);}, timer
        );
    }
    else
    {
        setTimeout(
            ()=>{reject("FAIL!");}, timer
        );
    }
})
}

function get_email() {
    return new Promise((resolve, reject) =>{
    email_list = ['asdf@google.com', 'qwer@microsoft.com', 'zxcv@cs.nthu.edu.tw'];
    // TODO : generate a success rate
    let rate = Math.random();
    // TODO : generate a timer
    let timer = Math.floor(Math.random() * 1000 + 500);
    // TODO : random select a item from list
    if(rate<0.9)
    {
        let idx = Math.floor(Math.random() * 3);
        setTimeout(
            ()=>
            {
                resolve(email_list[idx]);}, timer
        );
    }
    else
    {
        setTimeout(
            ()=>{reject("FAIL!");}, timer
        );
    }
})
}

function get_address() {
    return new Promise((resolve, reject) =>{
    address_list = ['1027 Alpha Avenue', '3132 Kidd Avenue', '876 Jefferson Street'];

    // TODO : generate a success rate
    let rate = Math.random();
    // TODO : generate a timer
    let timer = Math.floor(Math.random() * 1000 + 500);
    // TODO : random select a item from list
    if(rate<0.9)
    {
        let idx = Math.floor(Math.random() * 3);
        setTimeout(
            ()=>
            {
                resolve(address_list[idx]);
            }, timer
        );
    }
    else
    {
        setTimeout(
            ()=>{reject("FAIL!");}, timer
        );
    }
})
}

function initApp() {
    var reSamplebtn = document.getElementById('resamplebtn');
    reSamplebtn.addEventListener('click', retrieve_data);
}

async function retrieve_data() {
    var txtInfoName = document.getElementById('user-info-name');
    var txtFirstName = document.getElementById('firstName');
    var txtLastName = document.getElementById('lastName');
    var txtUserName = document.getElementById('username');
    var txtEmail = document.getElementById('email');
    var txtAddress = document.getElementById('address');
    var boxReSample = document.getElementById('re-sample');
    txtInfoName.innerText = '-';
    txtFirstName.value = '-';
    txtLastName.value = '-';
    txtUserName.value = '-';
    txtEmail.value = '-';
    txtAddress.value = '-';
    try {
        // TODO : get_info first
        await get_info().then(
            (id) => {txtInfoName.innerText = id+"_information";},
            (err) => {throw(err);} //get info failed
        )
        // TODO : call other function to get other data
        Promise.all([get_firstname(), get_lastname(), get_username(), get_email(), get_address()]).then( (value) => { 
            txtFirstName.value = value[0];
            txtLastName.value = value[1];
            txtUserName.value = value[2];
            txtEmail.value = value[3];
            txtAddress.value = value[4];
            console.log(value);
            },() => {
                txtInfoName.innerText = 'YOU FAILED!!!!!!!!!!';
                var labelbtn = document.getElementById('re-sample');
                if(labelbtn.checked==true) retrieve_data();
            }
        )
        
    } catch (e) {
        txtInfoName.innerText = 'YOU FAILED!!!!!!!!!!';
        //txtInfoName.innerText = e;
        var labelbtn = document.getElementById('re-sample');
        if(labelbtn.checked==true) retrieve_data();
    }
}

window.onload = function() {
    initApp();
}