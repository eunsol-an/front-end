// 객체 선언
const me = {};

// 버튼의 객체를 변수에 할당
let sbmBtn = document.getElementById('sbmBtn');
let printBtn = document.getElementById('printBtn');

// 데이터를 객체에 저장하는 함수
function saveList() {
    let name = document.getElementById('name').value;
    let addr = document.getElementById('addr').value;
    let favor_list1 = document.getElementById('favor_list1').value;
    let favor_list2 = document.getElementById('favor_list2').value;
    let favor_list3 = document.getElementById('favor_list3').value;
    let email = document.getElementById('email').value;
    let want = document.getElementById('want').value;
    let radioButtons = document.querySelectorAll('input[name="pet"]');
    let pet_check;
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            pet_check = radioButton.value
            break;
        }
    }
    
    // me = {
    //     '이름': name,
    //     '거주지': addr,
    //     '좋아하는 리스트': {
    //         '1': favor_list1,
    //         '2': favor_list2,
    //         '3': favor_list3
    //     },
    //     '이메일': email,
    //     'pet 소유 여부': pet_check,
    //     '지금 가장 원하는 것': want
    // }

    me.name = name;
    me.addr = addr;
    me.favor = {};
    me.favor.favor_list1 = favor_list1;
    me.favor.favor_list2 = favor_list2;
    me.favor.favor_list3 = favor_list3;
    me.email = email;
    me.want = want;
    me.pet_check = pet_check;
    
    // alert('저장이 완료되었습니다! 출력 버튼을 눌러 출력해주세요.');
    console.log(me);

}

// 객체에 저장된 데이터를 출력하는 함수
const printList = function() {
    let ok = document.getElementById('ok');
    ok.innerText = '데이터 리스트가 출력되었습니다';
    let list = document.getElementById('list');
    let str = `<li>이름: ${me.name}</li>
                <li>거주지: ${me.addr}</li>
                <li>좋아하는 리스트
                    <ul>
                    <li>1. ${me.favor.favor_list1}</li>
                    <li>2. ${me.favor.favor_list2}</li>
                    <li>3. ${me.favor.favor_list3}</li></li>
                    </ul>
                <li>이메일: ${me.email}</li>
                <li>pet 소유 여부: ${me.pet_check}</li>
                <li>지금 가장 원하는 것: ${me.want}</li>`
    list.innerHTML = str;
    
    // 모든 태그에 id값 주고 innerText
    // document.getElementById('nameVal').innerText = me.name;
    // document.getElementById('addrVal').innerText = me.addr;
    // document.getElementById('emailVal').innerText = me.email;
    // document.getElementById('pet_check_val').innerText = me.pet_check;
    // document.getElementById('wantVal').innerText = me.want;
    // let list = document.getElementById('favor');
    // let str = `<li>1. ${me.favor.favor_list1}</li>
    //             <li>2. ${me.favor.favor_list2}</li>
    //             <li>3. ${me.favor.favor_list3}</li>`
    // list.innerHTML = str;
}