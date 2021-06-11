interface Items{
    name: string,
    price: number,
    isShared: boolean
}

interface People{
    name: string,
    expenses: Items[],
    totalOffer?: number,
}

function tally(arr){
    let priceShared: number[] = []; 
    arr.forEach(item => {
        if(item.isShared === true){
            priceShared.push(item.price)
        }
    })

    return priceShared.reduce((start, now) => start + now, 0);
}



let data: People[] = [
    {
        name: 'Rebecca',
        expenses: [
            {
                name:'Clothes',
                price: 47,
                isShared: true,
            },
        ],
    },
        {
        name: 'Jacky',
        expenses: [
            {
                name:'Shoes',
                price: 140,
                isShared: false
            },
            {
                name:'Slurpee',
                price: 50,
                isShared: true
            },
        ],
    },
        {
        name: 'Ashly',
        expenses: [
            {
                name:'Chocolate',
                price: 40,
                isShared: true
            },
            {
                name:'Rice',
                price: 46,
                isShared: true
            },
                        {
                name:'Blouse',
                price: 25,
                isShared: false
            }


        ]
    },
]
console.log(data);

let itemShared: Items[] = [];

data.forEach(people => {
    people.expenses.forEach(item => {
        if(item.isShared === true){
            itemShared.push(item)
            }
        }
    )
});

data.forEach((people, index) => {
    let calc = tally(people.expenses);
    data[index].totalOffer = calc; 
})

let names: string[] = [];
let amountCalculated: People[] = data.sort(function(a,b){
    return a.totalOffer - b.totalOffer
})
amountCalculated.forEach(people => {
    names.push(people.name)   
});
console.log(names);


let offer: number[] = [];
amountCalculated.forEach(people => {
    offer.push(people.totalOffer);
})
console.log(offer);

let sharedAmount: number = offer.reduce((start, val) => start + val, 0)
console.log(sharedAmount);

let sharePerson: number = sharedAmount / 3
console.log(sharePerson);

let debtTally: number[] = offer.map(people => sharePerson - people);
console.log(debtTally);

