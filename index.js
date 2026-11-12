let addplayerButton=document.querySelector(".addplayer-button");
let count=0;
let countplayerSpan=document.querySelector('.countplayer-span');
let container1=document.querySelector('.container1');
let continueButton=document.querySelector('.continue-button');
let chooseblyerForm=document.querySelector('.chooseblyer-form');
let finalContainer=document.querySelector('.final-container');
let voteH1=document.querySelector(".vote-h1");
let offobjectNamedisplay=document.querySelector(".offobject-namedisplay");
let containerbeforeOffobject=document.querySelector('.containerbefore-offobject');
let beforeoffobjectButton=document.querySelector('.beforeoffobject-button');
let voitingcontainerspan=document.querySelector('.startvote-container span');
let buttonsvoteDiv=document.querySelector('.buttonsvote-div');
let startvoteContainer=document.querySelector('.startvote-container');
let resultDisplay=document.querySelector('.result-display');
let mainoffobjectContainer=document.querySelector('.mainoffobject-container');
let resutlsButton=document.querySelector('.resutls-button');
let submitSound=new Audio('click.wav');
let resultsButtonSound=new Audio('resultsbutton.wav');
let addplayerButtonSound=new Audio('addplayerbutton.wav');
let removeplayerButtonSound=new Audio('removeplayerbutton.wav');
let voteButtonSound=new Audio('votebutton.mp3');
let revealOffobjectSound=new Audio('revealoffobject.wav');
let gunShotSound=new Audio('gunshot.wav');
let categorySound=new Audio('categorysound.mp3');
let soundButton=document.querySelector('.sound-button');
let soundEnable;
let resultsContainer=document.querySelector('.resutls-container');
let playagainButton=document.querySelector('.playagain-button');
let newgameButton=document.querySelector('.newgame-button');
let welcomeContainer=document.querySelector('.welcome-container');
let welcomeButton=document.querySelector('.welcome-button');
let categoriesContainer=document.querySelector('.categories-container');
let animalsButton=document.querySelector('.animals-button');
let clothesButton=document.querySelector('.clothes-button');
let foodButton=document.querySelector('.food-button');
let frutesButton=document.querySelector('.frutes-button');
let gamesButton=document.querySelector('.games-button');
let randomButton=document.querySelector('.random-button');



if(localStorage.getItem('sound')!=null){
    soundEnable=localStorage.getItem('sound')!=='false';
}else{
    soundEnable=true;
}

if(soundEnable){
    soundButton.textContent='🔊';
}else{
    soundButton.textContent='🔇';
}


soundButton.addEventListener('click',function(){
    soundEnable=!soundEnable;
    localStorage.setItem('sound',soundEnable);
    if(soundEnable){
        soundButton.textContent='🔊';
    }else{
        soundButton.textContent='🔇';

    }
});

function playSound(sound){
    if(!soundEnable){
        return;
    }
    sound.currentTime=0;
    sound.play();
}

welcomeButton.addEventListener('click',function(){
    welcomeContainer.classList.add('hidden');
    categoriesContainer.classList.remove('hidden');
    playSound(submitSound);
});

animalsButton.addEventListener('click',function(){
    categoriesContainer.classList.add('hidden');
    container1.classList.remove('hidden');
    playSound(categorySound);
objectsArray = [
        'أسد','نمر','فيل','زرافة','قرد','دب','ذئب','ثعلب','أرنب','سلحفاة',
        'تمساح','كنغر','غزال','حصان','حمار','جمل','بقرة','خروف','ماعز','كلب',
        'قطة','فأر','سنجاب','قنفذ','باندا','دب قطبي','فهد','فهد أسود','وحيد القرن','فرس النهر',
        'غوريلا','شمبانزي','غزال','ظبي','حمار وحشي','بطريق','دجاجة','ديك','بطة','إوزة',
        'ببغاء','نسر','صقر','بومة','حمامة','عصفور','طاووس','نعامة','فلامنغو','بجعة',
        'دلفين','حوت','قرش','أخطبوط','سلطعون','قنديل البحر','فقمة','سحلية','أفعى','ضفدع'
    ];
});

clothesButton.addEventListener('click',function(){
    categoriesContainer.classList.add('hidden');
    container1.classList.remove('hidden');
        playSound(categorySound);
    objectsArray = [
        'قميص','بنطال','حذاء','جوارب','قبعة','جاكيت','معطف','هودي','كنزة','تيشيرت',
        'شورت','تنورة','فستان','بدلة','ربطة عنق','حزام','وشاح','قفازات','نظارة شمسية','حقيبة',
        'حذاء رياضي','صندل','شبشب','حذاء رسمي','بوت','عباءة','ثوب','بيجاما','ملابس داخلية','ملابس سباحة',
        'طاقية','كوفية','شماغ','عقال','ساعة يد','سوار','خاتم','قلادة','أقراط','مشبك شعر',
        'ربطة شعر','حجاب','طرحة','جلباب','مريول','مئزر','قميص نوم','سترة جلدية','سترة جينز','سترة صوف',
        'حذاء بكعب','رباط حذاء','زر قميص','سحاب','جيب','ياقة','كم','ياقة عالية','معطف مطر','ملابس رياضية'
    ];
});

foodButton.addEventListener('click',function(){
    categoriesContainer.classList.add('hidden');
    container1.classList.remove('hidden');
        playSound(categorySound);
    objectsArray = [
        'برغر','بيتزا','بطاطا مقلية','سوشي','دونات','ساندويش','آيس كريم','كيك','شاورما','فلافل',
        'منسف','مقلوبة','كبسة','مندي','مجدرة','كبة','ورق عنب','محشي','مسخن','مفتول',
        'مكرونة','سباغيتي','لازانيا','نودلز','شوربة','سلطة','تبولة','فتوش','حمص','متبل',
        'فول','بيض مقلي','بيض مسلوق','أومليت','دجاج مشوي','دجاج مقلي','سمك مشوي','جمبري','ستيك','كباب',
        'كفتة','نقانق','هوت دوغ','فطيرة','مناقيش','كروسان','فطائر الجبن','بان كيك','وافل','بسكويت',
        'شوكولاتة','حلوى','بقلاوة','كنافة','قطايف','مهلبية','بودينغ','مهلبية','أرز بالحليب','تشيز كيك'
    ];

});

frutesButton.addEventListener('click',function(){
    categoriesContainer.classList.add('hidden');
    container1.classList.remove('hidden');
        playSound(categorySound);
     objectsArray = [
        'تفاحة','موز','برتقال','فراولة','عنب','بطيخ','شمام','أناناس','مانجو','خوخ',
        'مشمش','كرز','كمثرى','رمان','كيوي','ليمون','جريب فروت','توت','توت أزرق','توت بري',
        'جوافة','بابايا','أفوكادو','تين','تمر','جوز الهند','يوسفي','برقوق','نكتارين','كاكا',
        'جزر','خيار','طماطم','بطاطا','بطاطا حلوة','بصل','ثوم','فلفل أخضر','فلفل أحمر','فلفل حار',
        'خس','ملفوف','قرنبيط','بروكلي','سبانخ','بقدونس','كزبرة','نعناع','كوسا','باذنجان',
        'فاصولياء','بازيلاء','ذرة','فجل','لفت','شمندر','يقطين','فطر','بامية','كرفس'
    ];

});

gamesButton.addEventListener('click',function(){
    categoriesContainer.classList.add('hidden');
    container1.classList.remove('hidden');
        playSound(categorySound);
      objectsArray = [
        'قراند 5','قراند 4','قراند سان أندرياس',
        'ذا لاست أوف أس','ذا لاست أوف أس 2',
        'إلدن رينغ','دارك سولز 3','دارك سولز 1',
        'سيكيرو','بلودبورن','ديمون سولز',
        'ريد ديد ريدمبشن 2','ريد ديد ريدمبشن',
        'ذا ويتشر 3','سايبربانك 2077',
        'غود أوف وور','غود أوف وور راغناروك',
        'سبايدر مان 2','سبايدر مان','مايلز موراليس',
        'ريزدنت إيفل 4','ريزدنت إيفل 2',
        'ريزدنت إيفل 7','ريزدنت إيفل 8',
        'سايلنت هيل 2','دارك سولز 2',
        'هولو نايت','هولو نايت سيلك سونغ',
        'بلدورز غيت 3','سيكيرو شادوز داي توايس',
        'أنشارتد 4','أنشارتد 2',
        'جوست أوف تسوشيما','جوست أوف يوتي',
        'هورايزن زيرو داون','هورايزن فوربيدن ويست',
        'ديس أونرد','آلان ويك 2',
        'دث ستراندينغ','دث ستراندينغ 2',
        'دوم إترنال','كول أوف ديوتي',
        'باتلفيلد','فورتنايت','ماينكرافت',
        'روكيت ليغ','فورزا هورايزن 5',
        'أساسنز كريد','فار كراي 5',
        'باتمان أركام نايت','سي أوف ثيفز',
        'إت تيكس تو','سبليت فيكشن',
        'ببجي موبايل',
        'كلاش أوف كلانس',
        'فري فاير',
        'كول أوف ديوتي موبايل',
        'موبايل ليجندز',
        'براول ستارز',
        'سابواي سيرفرز'
    ];
});

randomButton.addEventListener('click',function(){
    categoriesContainer.classList.add('hidden');
    container1.classList.remove('hidden');
        playSound(categorySound);

    objectsArray=[
    'سيارة','عامود كهرباء','كيبورد','ساعة','تفاحة',
    'كمبيوتر','بحر','طائرة','كرسي',
    'قلم','مفتاح','ثلاجة','جبل','كتاب',
    'هاتف','نافذة','مصباح','حذاء','كرة',
    'باب','قمر','شجرة','سفينة','نظارة','حقيبة',
    'مرآة','مروحة','تلفاز','سماعة','درج','مصعد',
    'جسر','قطار','دراجة','مظلة','كاميرا','وسادة',
    'بطارية','ساعة رملية','شمعة','ملعقة','شوكة',
    'صحن','كوب','زجاجة','خريطة','مقص','مطرقة',
    'مغناطيس','روبوت','فيل','زرافة','ذئب','ثعلب',
    'دب','أرنب','سلحفاة','تمساح','كنغر','غزال'
];
});


addplayerButton.addEventListener('click',function(){
    playSound(addplayerButtonSound);
    count++;
    let addplayerDiv=document.createElement('div');
    let playerNumber=document.createElement('span');
    let inputtextPlayer=document.createElement('input');
    let deleteplayerButton =document.createElement('button');

    inputtextPlayer.type='text';

    playerNumber.textContent=count;
    addplayerDiv.appendChild(playerNumber);

    inputtextPlayer.classList.add('inputtext-player');
    inputtextPlayer.required=true;
    inputtextPlayer.maxLength=10;
    addplayerDiv.appendChild(inputtextPlayer);

    deleteplayerButton.textContent='🗑️';
    deleteplayerButton.classList.add('deleteplayer-button');
    deleteplayerButton.addEventListener('click',function(){
     playSound(removeplayerButtonSound);
     addplayerDiv.remove();
     count--;
     countplayerSpan.textContent=count;
    });

    addplayerDiv.appendChild(deleteplayerButton);
    addplayerDiv.classList.add('addplayer-div');
    document.querySelector('main').appendChild(addplayerDiv);
    
    countplayerSpan.textContent=count;
});


let playersInput=[];
let players=[];
let randomPlayerIndex;
let offobjectPlayer;
let objectsArray;
let randomObjectIndex;
let finalObject;


chooseblyerForm.addEventListener('submit',function(e){
    e.preventDefault();
   
    let playersForCheckNull=document.querySelectorAll('main input');
    let booleanForCheckNull=true;
    playersForCheckNull.forEach(playername=>{
        if(playername.value.trim()==='')
        {
            booleanForCheckNull=false;
        }
    });

     if(count<3||booleanForCheckNull==false){
        return;
     }

   playSound(submitSound);
    container1.classList.add('hidden');
  players=[];
    playersInput=document.querySelectorAll('.addplayer-div input');
    playersInput.forEach(player=>{
        players.push({
        name:player.value.trim(),
        status:true,
        score:0
    });
});

randomPlayerIndex=Math.floor(Math.random()*players.length);
offobjectPlayer=players[randomPlayerIndex];
offobjectPlayer.status=false;
 

randomObjectIndex=Math.floor(Math.random()*(objectsArray.length));
finalObject=objectsArray[randomObjectIndex];
startphase2();
});

//container 2
let i=0;
function startphase2(){        
        function startcontainer2(){
            if(i==players.length){
                voting();
                return;
            }
            let container2=document.createElement("div");
            let container2H1=document.createElement("h1");
            let container2Span=document.createElement('span');
            let container2Button=document.createElement('button');
            
            container2Span.textContent=players[i].name;
            container2H1.textContent='اعطو الجوال ل ';
            container2H1.appendChild(container2Span);
            container2.appendChild(container2H1);
            
            
            container2Button.textContent='التالي';
            container2Button.classList.add('keepgo-button');
            container2.appendChild(container2Button);
            
            
            container2.classList.add('container2');
            document.body.appendChild(container2);
            
            
            container2Button.addEventListener('click',function(){
                playSound(submitSound);
                container2.remove();
                startcontainer3();
            });
        }
        
        function startcontainer3(){
            let container3=document.createElement("div");
            let container3H1=document.createElement("h1");
            let container3Span=document.createElement('span');
            let container3Span2=document.createElement('span');
            let container3p=document.createElement('p');
            let container3Span3=document.createElement('span');
            let container3Button=document.createElement('button');
            
            container3Span.textContent=` ${players[i].name} انت `;
            container3Span.classList.add('name-span');
            container3H1.appendChild(container3Span);
            
            if(players[i].status==true){
                container3Span2.textContent='جوا السالفة';
            }
            else{
                container3Span2.textContent='برا السالفة';
            }
            container3Span2.classList.add('choise-span');
            container3H1.appendChild(container3Span2);
            
            container3.appendChild(container3H1);
            
            if(players[i].status==true){

                container3Span3.textContent=finalObject;
                container3Span3.classList.add('animal-name');
                container3p.textContent='الموضوع هو';
                container3p.appendChild(container3Span3);
                container3.appendChild(container3p);
            }

            container3Button.textContent='التالي';
            container3Button.classList.add('keepgo-button2');
            container3.appendChild(container3Button);
            
            container3.classList.add('container3');
            document.body.appendChild(container3);
            
            container3Button.addEventListener('click',function(){
                playSound(submitSound);
                i++;
                container3.remove();
                startcontainer2();
            });
        }
        startcontainer2();
    }

    beforeoffobjectButton.addEventListener('click',function(){
        playSound(revealOffobjectSound);
        containerbeforeOffobject.classList.add('hidden');
        startoffobjectcontainer();
    });

 function startoffobjectcontainer() {

    mainoffobjectContainer.classList.remove("hidden");
    voteH1.textContent = players[0].name;

    let i = 0;

    let intraval = setInterval(function () {
        voteH1.textContent = players[i].name;
        i++;

        if (i >= players.length) {
            i = 0;
        }
    }, 150); 

    setTimeout(function () {
        clearInterval(intraval);
        revealOffobjectSound.pause();
        playSound(gunShotSound);
        voteH1.style.color = 'red';
        voteH1.textContent = offobjectPlayer.name;
        resutlsButton.classList.remove('hidden');
    }, 6000); 
}

let votingcount=0;
function voting(){
    startvoteContainer.classList.remove("hidden");
    if(votingcount>=players.length){
        startvoteContainer.classList.add('hidden');
        containerbeforeOffobject.classList.remove('hidden');
        return;
    }
    voitingcontainerspan.textContent=players[votingcount].name;
    for (let i=0;i<players.length;i++){
        let playervotebutton=document.createElement('button');
        playervotebutton.textContent=players[i].name;
        buttonsvoteDiv.appendChild(playervotebutton);
        playervotebutton.addEventListener('click',function(){
            playSound(voteButtonSound);
            if(players[i]===offobjectPlayer){
                if(players[votingcount]!==offobjectPlayer){
                    players[votingcount].score+=100;
                }
            }
            let votebuttons=document.querySelectorAll('.buttonsvote-div button');
            votebuttons.forEach(button=>{
                button.remove();
            });
            votingcount++;
            voting();
        });
    }
    
}
 
resutlsButton.addEventListener('click',function(){
    playSound(resultsButtonSound);
    mainoffobjectContainer.classList.add('hidden');
    results();
});

function results(){
    resultsContainer.classList.remove('hidden');
    for(let i=0;i<players.length;i++){
        let resultPlayerSpan=document.createElement('span');
        let resultplayerp=document.createElement('p');

        resultPlayerSpan.textContent=players[i].score;

        resultplayerp.textContent=`${players[i].name}`;
        resultplayerp.prepend(resultPlayerSpan);
        resultDisplay.appendChild(resultplayerp);
    }
} 

playagainButton.addEventListener('click',function(){
    playSound(submitSound);
    resultsContainer.classList.add('hidden');

    resultDisplay.innerHTML = '';

    for(let i=0;i<players.length;i++){
        players[i].status=true;

    }
    votingcount=0;
    i=0;

    randomPlayerIndex=Math.floor(Math.random()*players.length);
    offobjectPlayer=players[randomPlayerIndex];
    offobjectPlayer.status=false;


    randomObjectIndex=Math.floor(Math.random()*(objectsArray.length));
    finalObject=objectsArray[randomObjectIndex];
    resutlsButton.classList.add('hidden');
    voteH1.style.color = '#F8F5FF';



startphase2();
});

newgameButton.addEventListener('click',function(){
    playSound(submitSound);
    categoriesContainer.classList.remove('hidden');
    resultDisplay.innerHTML = '';
    resultsContainer.classList.add('hidden');
    votingcount=0;
    i=0;
    resutlsButton.classList.add('hidden');
    voteH1.style.color = '#F8F5FF';
    players.length=0;
    let playersDivForDel=document.querySelectorAll('main .addplayer-div');
    playersDivForDel.forEach(input => {
    input.remove();        
    });
    count=0;
    countplayerSpan.textContent=0;
});
