/**
 * 历史战役百科 - 战役数据
 */

const battles = [
    {
        id: 'thermopylae',
        name: '温泉关战役',
        year: '公元前480年',
        location: '希腊·温泉关',
        description: '300斯巴达勇士的传奇之战，希腊联军阻击波斯大军的壮烈史诗。',
        cover: 'content/images/thermopylae-cover.jpg',
        content: 'content/battles/thermopylae/index.md',
        images: [
            {
                src: 'content/battles/thermopylae/images/01-map.jpg',
                caption: '波斯帝国入侵希腊路线图'
            },
            {
                src: 'content/battles/thermopylae/images/02-spartans.jpg',
                caption: '斯巴达重装步兵方阵'
            },
            {
                src: 'content/battles/thermopylae/images/03-battle.jpg',
                caption: '温泉关战役场景'
            }
        ]
    },
    {
        id: 'marathon',
        name: '马拉松战役',
        year: '公元前490年',
        location: '希腊·马拉松平原',
        description: '雅典军队以少胜多击败波斯帝国，开启了希腊黄金时代。',
        cover: 'content/images/marathon-cover.jpg',
        content: 'content/battles/marathon/index.md',
        images: [
            {
                src: 'content/battles/marathon/images/01-map.jpg',
                caption: '马拉松战役地图'
            },
            {
                src: 'content/battles/marathon/images/02-phalanx.jpg',
                caption: '希腊方阵战术'
            }
        ]
    },
    {
        id: 'cannae',
        name: '坎尼战役',
        year: '公元前216年',
        location: '意大利·坎尼',
        description: '汉尼拔军事生涯的巅峰之作，军事史上最经典的包围战。',
        cover: 'content/images/cannae-cover.jpg',
        content: 'content/battles/cannae/index.md',
        images: []
    },
    {
        id: 'red-cliffs',
        name: '赤壁之战',
        year: '公元208年',
        location: '中国·长江赤壁',
        description: '孙刘联军以火攻大破曹操八十万大军，奠定三国鼎立格局。',
        cover: 'content/images/red-cliffs-cover.jpg',
        content: 'content/battles/red-cliffs/index.md',
        images: []
    }
];
