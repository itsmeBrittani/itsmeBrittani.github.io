$(() => {
console.log("you got it dude!")

// create deck 

let $suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
let $value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let $deck = [];

for(i = 0; i <$value.length; i++){
    for(w = 0; w < $suits.length; w++){
        let $point = parseInt($value[i]);
        if(($value[i]) == 'J' || $value[i] == 'Q' || $value[i] == 'K')
        $point = 10;
        if(($value[i]) == 'A')
        $point = 11;
    const $card = {Value: $value[i], Suit: $suits[w], Point: $point};
    $deck.push($card);
    }
}

console.log($deck)

let $playerHand = [];
let $houseHand = [];

// click event listener for Deal
const $dealBtn = $('#deal')
$dealBtn.on('click', () => {
    console.log('Button has been clicked')
});

const $hitBtn = $('#hitme')
$hitBtn.on('click', () => {
    console.log('Clicked')
});

const $standBtn = $('#stand')
$standBtn.on('click', () => {
    console.log('Clicked')
});

});