/**
 * Created with IntelliJ IDEA.
 * User: mikk
 * Date: 6/2/14
 * Time: 12:15 AM
 * To change this template use File | Settings | File Templates.
 */

function pageLoaded(){

}

function newGame(no_of_games, max_values) {
    $('#bingo_frame').empty();

    if (max_values < 1)
        max_values = 1;

    for(var i = 0; i < no_of_games; i++)
    {
        var bingoGame = new Bingo(max_values);
        bingoGame.printTable().appendTo('#bingo_frame');
    }
}