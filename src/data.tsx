import Image1 from './static/images/1.jpg';
import Image2 from './static/images/2.jpg';
import Image3 from './static/images/3.jpg';
import Image4 from './static/images/4.jpg';
import Image5 from './static/images/5.jpg';
import Image6 from './static/images/6.png';
import Image7 from './static/images/7.jpg';
import Image8 from './static/images/8.jpg';
import Image9 from './static/images/9.jpg';
import Image10 from './static/images/10.jpg';

const structures = [
    {
        img: Image1,
        title: "Сиамская кошка",
        description: [
            `Сиамская кошка имеет весьма характерную внешность, отличительными чертами которой являются тонкое, длинное, трубообразное гибкое тело, голова в виде длинного клина, большие миндалевидные косо поставленные глаза ярко-синего цвета, очень большие уши, широкие в основании и заостренные на концах, поставленные таким образом, чтобы между мочкой носа и кончиками ушей образовывался равносторонний треугольник. Шерсть короткая, плотно прилегающая к телу, без подшерстка. Очень длинный хлыстообразный хвост, тонкий от самого основания с заостренным длинным кончиком.`,
            `Активные кошки. Нуждаются во внимании, любят физический контакт. Общительные, ласковые и доверчивые. Кошки из сиамо-ориентальной группы умеют пользоваться своими голосовыми связками, меняя тональность и высоту звука для выражения своих требований и чувств. Легко поддаются дрессировке.`
        ],
    },   
    {
        img: Image2,
        title: "Британская короткошёрстная кошка",
        description: [
            `Британская короткошёрстная кошка  — порода домашней кошки. В классификациях FIFe и WCF относится к категории shorthair. Выведена в XIX веке. По одной версии является потомком породы Шартрез, а по другой, римских кошек и местных сородичей.`,
            `Шерсть у британской кошки очень пушистая и мягкая, но довольно короткая. Британским кошкам свойственно много различных окрасов, существует около 30 оттенков цветов их густой, роскошной шерсти, самые популярные — сплошные (серо-голубой, голубой, чёрный, лиловый, шоколадный), табби и серебристые табби, их разновидности: пятно, полоса и мрамор.`
        ]
    },
    {
        img: Image3, 
        title: "Мейн-кун",
        description: [
            `Мейн-кун (англ. Maine Coon) — порода кошек, которая произошла от кошек штата Мэн на северо-востоке США. Аборигенная порода кошек Северной Америки. 
            Название «мейн-кун» является производным от двух слов. Первое — это название штата Мэн, а второе — производное от англ. raccoon, которое переводится как «енот». 
            Старейшая американская порода кошек. Является официальным символом штата Мэн.`,
            `Крупнейшая порода кошек, самцы весят от 5,9 до 8,2 кг (кастрированные — до 15 кг), а самки от 3,6 до 5,4 кг (стерилизованные — до 7,5—8,5 кг). 
            Высота в холке у взрослых кошек достигает от 25 до 41 см, а общая длина с хвостом до 120 см (длина хвоста до 36 см). Полный потенциальный размер кошки достигается в возрасте от 3 до 5 лет, в то время как у большинства других кошек — в возрасте 1 года. 
            Однако есть и другие медленно взрослеющие породы, тоже крупного размера (например, норвежская лесная). 
            Все особи породы мейн-кун имеют небольшие кисточки на кончиках ушей. 
            Длина тела мейн-кунов составляет метр и более, самый длинный официально зарегистрированный мейн-кун имел тело длиной 1 метр 23 сантиметра.`
        ]
    },
    {
        img: Image4,
        title: 'Персидская кошка',
        description: [
            `Персидская кошка (перс. «иранский кот») — порода длинношёрстных кошек, одна из старейших и самых популярных в мире. Персидские кошки не могут жить вне дома. 
            В целом кошки этой породы довольно своенравны и упрямы. При этом они довольно уравновешены. 
            Они не склонны к активной агрессии, и хотя могут за себя постоять, чаще просто избегают контактов с теми, кто им не нравится. Иногда могут мстить.`,
            `Очень спокойны. Их голос редко слышится. Персы спокойно и настойчиво просят обратить внимание на них: они сидят около хозяина и пристально глядят ему в лицо. 
            Они сопровождают всех домашних из комнаты в комнату. Не боятся детей, но и большой любви к ним не питают.
            Несмотря на то, что персы считаются вечно лежащими «диванными» кошками, они могут быть достаточно подвижны, когда с ними играют. 
            Даже взрослые кошки с воодушевлением носятся за мячиком. Также любят ловить насекомых, случайно залетевших в дом.
            Персы любопытны от природы, и любят обследовать все новые и незнакомые для них уголки комнаты.`
        ] 
    },
    {
        img: Image5,
        title: "Рэгдолл",
        description: [
             `Рэгдо́лл (англ. Ragdoll — «тряпичная кукла») — порода крупных полудлинношёрстных кошек. 
             Порода выведена в США в 1960-х годах заводчиком персидских кошек из Калифорнии Энн Бейкер. Кошки отбирались по наиболее мягкому характеру, в результате чего они могут полностью расслабляться на руках у человека, что и дало название породы.`,
            `Какие именно породы использовали для получения рэгдолла — неизвестно. Но у хозяйки была любимица: длинношерстная белая кошка по кличке Жозефина, которая попала под автомобиль, а после прохождения лечения, по мнению хозяйки, имела заторможенную реакцию и изменения в поведении. 
            Сама Энн Бейкер была уверена в том, что подобные перемены вызваны некими лабораторными опытами, которые якобы провели, пока кошка проходила реабилитацию.`
        ]
    },
    {
        img: Image6,
        title: "Сфинкс",
        description: [
            `Канадский сфинкс — одна из нескольких бесшерстных пород кошек. При выведении породы была закреплена естественная рецессивная мутация, приводящая к отсутствию шерсти — hr. В нынешний момент это полностью сформированная и достаточно стабильная порода с 50-летним стажем, передающая свои признаки по рецессивному типу. Порода признана всеми международными фелинологическими организациями. Другие бесшёрстные кошки — донской сфинкс, петерболд, украинский левкой и др. — относительно молоды (около 20-30 лет) и находятся на пути становления.`,
            `Сфинксы очень ласковые и умные, но всё же их дальнейшее поведение зависит от воспитания людей. Они легко поддаются дрессировке и у них хорошая память. Сфинксы ловко прыгают, так, что даже подростки этой породы могут запрыгивать на высоту до одного метра, взрослые же особи на высоту 1,3 м. Кошки этой породы не терпят одиночества и обычно очень привязаны к хозяевам.`
        ]
    },
    {
        img: Image7,
        title: 'Абиссинская кошка',
        description: [
            `Абисси́нская кошка — порода домашних кошек, выведенная в Великобритании в конце XIX века на основе аборигенных пород кошек Восточной Африки и Юго-Восточной Азии. Абиссинская — одна из самых древних пород кошек и одновременно одна из первых пород, получивших официальный выставочный стандарт.`,
            `Есть несколько версий происхождения данной породы кошек. Ни одна из них не является полностью доказанной, у каждой из них есть свои сторонники и противники. 
            Известно, что первой кошкой абиссинского фенотипа, получившей известность в Европе, была кошка по кличке Зула, привезённая в Англию из Эфиопии, в то время называвшейся Абиссинией. По её происхождению и получила название порода в будущем. Зулу привёз капитан Баррет-Ленард в 1868 году, вернувшись домой с Англо-абиссинской войны. Неизвестно, были ли у этой кошки котята, использованные в становлении породы, но именно эта кошка привлекла внимание общественности к аборигенным кошкам Африки. Цветная литография кошки Зулы, сделанная ещё при её жизни, опубликована в книге Гордона Стейблса (1874 год) «Кошки: их особенности и классификация».`
        ] 
    },
    {
        img: Image8,
        title: 'Бурма',
        description: [
            `Бу́рма, или бурманская короткошёрстная кошка — порода короткошёрстных кошек. Кошку бурманской породы отличает мускулистое, крепкое тело, короткая блестящая шерсть, большие округлые глаза жёлтого цвета. Бурмы ласковы, игривы, привязаны к человеку, терпимы к соседству с другими кошками, а также с собаками.`,
            `Существует два основных типа бурманских кошек — европейский и американский. У американского типа признается больше вариаций окрасов, внешне кошки имеют более округлую морду, тип телосложения приближен к американской короткошерстной кошке. У бурмы европейского типа окрасов, соответственно, меньше, шерсть более тонкая, кошки в сиамо-ориентальном типе, более легкие и обладающие более узкой мордой.`
        ]
    },
    {
        img: Image9,
        title: 'Бирманская кошка',
        description: [
            `Священная бирма (SBI, Бирма́нская ко́шка) — порода полудлинношёрстных кошек колор-пойнтового окраса, которая по одной из легенд ведёт своё происхождение из Бирмы. Её не следует путать с бурманской кошкой, которая является отдельной породой короткошёрстных кошек. Бирманская кошка узнаваема благодаря необычному окрасу, который по названию породы получил название бирманского окраса. Для кошек с этим окрасом характерно наличие белых «перчаток» при пойнтовом окрасе длинной шерсти. Порода также известна под названием «Священная бирманская кошка» (хотя в англоязычном произношении названия страны — «Священная бурма»). Порода признана всеми фелинологическими организациями мира.`,
            `Бирманская кошка произошла от скрещивания сиамских и персидских кошек и обладает шерстью «персов» и концевой окраской «сиамов». Согласно распространённой традиции, бирманская порода впервые появилась в Европе примерно в 1919 году, когда один из Вандербильтов, знаменитой семьи американских миллиардеров, во время своего круиза по восточным странам приобрёл пару котят, за которых отдал огромное состояние. Самец не перенёс путешествие, а самка произвела на свет потомство в Ницце, во Франции.`
        ]
    },
    {
        img: Image10,
        title: 'Американский бобтейл',
        description: [
            `Американский бобтейл является дружелюбной, любящей, ласковой и излучающей нежность кошкой. Главной ее особенностью выступает укороченный, подобно обрезанному хвостик. Порода короткохвостого кота может, на первый взгляд, произвести впечатление дикого зверя. Однако он имеет не агрессивный, добродушный характер. Кошка этого вида мускулистая, крепкая, средняя по размеру и достаточно крупная. Американский бобтейл - умное и привязанная к человеку домашнее животное, оно бывает длинношерстным и короткошерстным.`,
            `Американский бобтейл выступает достаточно молодой породой, предок которого был найден в 1965 году. Согласно истории, молодой супружеской паре Сандерс удалось найти брошенного котенка у индийский резервации Южной Аризоны. Котенок не отличался от других. Однако у него была интересная особенность: укороченный хвост, как у зайца, с загнутым концом. Сандерс свели котенка с сиамской кошкой и получили бесхвостого котенка, который дал старт распространению вида. Спустя некоторое время рядом короткохвостых мурлык начали интересоваться разные заводчики. С того периода времени проводились масштабные работы, нацеленные на выведение американского бобтейла.`
        ]  
    },
 
];

export default structures;