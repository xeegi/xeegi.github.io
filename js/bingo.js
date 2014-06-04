/**
 * Created with IntelliJ IDEA.
 * User: mikk
 * Date: 6/2/14
 * Time: 10:54 PM
 * To change this template use File | Settings | File Templates.
 */

function Bingo(max_values) {
    this.numbers = arrayRange(1, max_values);
    this.numbers.shuffle();
}

Bingo.prototype.printTable = function() {
    var newTable = $('<table><tr><th>B</th><th>I</th><th>N</th><th>G</th><th>O</th></tr></table>');

    for (var i = 0; i < 5; i++)
    {
        var newRow = $('<tr></tr>');
        for (var j = 0; j < 5; j++)
        {
            var newCell = $('<td></td>');
            newCell.html(this.numbers.pop());
            newCell.appendTo(newRow);
        }
        newRow.appendTo(newTable);
    }
    return newTable;
}

Array.prototype.shuffle = function (){
    var i = this.length, j, temp;
    if ( i == 0 ) return;
    while ( --i ) {
        j = Math.floor( Math.random() * ( i + 1 ) );
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
};

function arrayRange(from, to) {
    var arr = [];
    for (var i = from; i <= to; i++)
        arr.push(i);
    return arr;
}