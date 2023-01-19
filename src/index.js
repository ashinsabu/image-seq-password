// dom handling

let imgList = {
    cats: [
        {
            url: ("../assets/cat_01.jpg"),
            code: "cat_01"
        },
        {
            url: ("../assets/cat_02.jpg"),
            code: "cat_02"
        },
        
    ],
    dogs: [
        {
            url: ("../assets/dog_01.jpg"),
            code: "dog_01"
        },
        {
            url: ("../assets/dog_02.jpg"),
            code: "dog_02"
        },
        {
            url: ("../assets/dog_03.jpg"),
            code: "dog_03"
        },
    ],
    inst: [
        {
            url: ("../assets/inst_01.jpg"),
            code: "inst_01"
        },
        {
            url: ("../assets/inst_02.jpg"),
            code: "inst_02"
        },
        {
            url: ("../assets/inst_03.jpg"),
            code: "inst_03"
        },
        {
            url: ("../assets/inst_04.jpg"),
            code: "inst_04"
        },
    ],
    brands: [
        {
            url: ("../assets/brands_01.jpg"),
            code: "brands_01"
        },
        {
            url: ("../assets/brands_02.jpg"),
            code: "brands_02"
        },
        {
            url: ("../assets/brands_03.jpg"),
            code: "brands_03"
        },
    ],
    personalities: [
        {
            url: ("../assets/personalities_01.jpg"),
            code: "personalities_01"
        },
        {
            url: ("../assets/personalities_02.jpg"),
            code: "personalities_02"
        },
        {
            url: ("../assets/personalities_03.jpg"),
            code: "personalities_03"
        },
    ],
    cars: [
        {
            url: ("../assets/car_01.jpg"),
            code: "car_01"
        },
        {
            url: ("../assets/car_02.jpg"),
            code: "car_02"
        },
        {
            url: ("../assets/car_03.jpg"),
            code: "car_03"
        },
    ]
}
// Fisher-Yates-Durstenfeld shuffle:
function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}
for(const property in imgList){
    // console.log(`${property}: ${imgList[property]}`);
    imgList[`${property}`] = shuffle(imgList[`${property}`]);
}
// console.log(imgList['dogs']);
registerPassword = "";
// registration ui switches
if(document.querySelector('#registerPassword')){
    //switch to image password
    document.querySelector('#textPasswordRegister').addEventListener('click', () => {
        document.querySelector('#registerPassword').style.display = 'block';
        document.querySelector('.password-creator-container').classList.add('invisible');

    })
    //switch to text password
    document.querySelector('#imagePasswordRegister').addEventListener('click', () => {
        document.querySelector('#registerPassword').style.display = 'none';
        document.querySelector('.password-creator-container').classList.remove('invisible');

    })

    document.querySelectorAll('input[type="checkbox"]').forEach((interest) => {
        interest.addEventListener('click', () => {
            if(interest.checked){
                for(let i =0;i<imgList[interest.value].length;i++){
                    // console.log(imgList[interest.value][i].url);
                    let imgg = document.createElement('img');
                    imgg.src = imgList[interest.value][i].url;
                    imgg.width = 72;
                    imgg.height = 72;
                    imgg.dataset.code = imgList[interest.value][i].code;
                    imgg.classList.add('registerPswImage');
                    imgg.classList.add(imgList[interest.value][i].code);

                    imgg.addEventListener('click', () => {
                        let newImg = document.createElement('img');
                        newImg.src = imgg.src;
                        newImg.width=72;
                        newImg.height=72;
                        registerPassword += imgList[interest.value][i].code;
                        console.log(registerPassword);
                        document.querySelector('.registerPasswordSeq').append(newImg);
                    });

                    document.querySelector('.register-images-area').append(imgg);
                }
            }
            else{
                for(let i =0;i<imgList[interest.value].length;i++){
                    // console.log(imgList[interest.value][i].url);
                    let toBeRemoved = imgList[interest.value][i].code;
                    document.querySelector('.'+toBeRemoved).remove();
                    // document.querySelector('.register-images-area').append(imgg);
                }
            }
            // console.log('test');
            // document.querySelectorAll('.registerPswImage').forEach((imgg) => {
            //     imgg.removeEventListener('click', handleClick);
            //     imgg.addEventListener('click',  function handleClick() {
            //         console.log("test");
            //         let newImg = document.createElement('img');
            //         newImg.src = imgg.src;
            //         newImg.width='72px';
            //         document.querySelector('.registerPasswordSeq').append(newImg);
            //     })
            // })
        });

        
    })

}
if(document.querySelector('#resetRegisterSequence')){
    document.querySelector('#resetRegisterSequence').addEventListener('click', () => {
        document.querySelector('.registerPasswordSeq').innerHTML = "";
        registerPassword = "";
    })
}



let loginPassword = "";

if(document.querySelector('#loginPassword')){
    //switch to image password
    document.querySelector('#textPasswordLogin').addEventListener('click', () => {

        document.querySelector('#loginPassword').style.display = 'block';
        document.querySelector('.password-writer-container').classList.add('invisible');

    });

    //switch to text password
    document.querySelector('#imagePasswordLogin').addEventListener('click', () => {

        document.querySelector('#loginPassword').style.display = 'none';
        document.querySelector('.password-writer-container').classList.remove('invisible');

    });

    document.querySelectorAll('input[type="checkbox"]').forEach((interest) => {
        // console.log(interest.id);
        if(interest.id.includes("login")){
            // console.log(interest.id);
            interest.addEventListener('click', () => {
            if(interest.checked){
                for(let i =0;i<imgList[interest.value].length;i++){
                    // console.log(imgList[interest.value][i].url);
                    let imgg = document.createElement('img');
                    imgg.src = imgList[interest.value][i].url;
                    imgg.width = 72;
                    imgg.height = 72;
                    imgg.dataset.code = imgList[interest.value][i].code;
                    imgg.classList.add('loginPswImage');
                    imgg.classList.add(imgList[interest.value][i].code);

                    imgg.addEventListener('click', () => {
                        let newImg = document.createElement('img');
                        newImg.src = imgg.src;
                        newImg.width=72;
                        newImg.height=72;
                        loginPassword += imgList[interest.value][i].code;
                        // console.log(registerPassword);
                        document.querySelector('.loginPasswordSeq').append(newImg);
                    });

                    document.querySelector('.login-images-area').append(imgg);
                }
            }
            else{
                for(let i =0;i<imgList[interest.value].length;i++){
                    // console.log(imgList[interest.value][i].url);
                    let toBeRemoved = imgList[interest.value][i].code;
                    document.querySelector('.'+toBeRemoved).remove();
                    // document.querySelector('.register-images-area').append(imgg);
                }
            }
        });
    }
        
    })
}
if(document.querySelector('#resetLoginSequence')){
    document.querySelector('#resetLoginSequence').addEventListener('click', () => {
        document.querySelector('.loginPasswordSeq').innerHTML = "";
        loginPassword = "";
    })
}