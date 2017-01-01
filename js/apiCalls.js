/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var githubURL = "https://api.github.com/users/andrewarrow/repos";

function appendAttributeAmounts() {
    var nullDescriptionCounter = 0;
    var nullHomePageCounter = 0;
    var trueForkCounter = 0;
    var javascriptLanguageCounter = 0;
    $.getJSON(githubURL, function (result) {
        for (i = 0; i < result.length; i++) {
            if (result[i].description == null) {
                nullDescriptionCounter++;
            }
            if (result[i].homepage == null || result[i].homepage == "") {
                nullHomePageCounter++;
            }
            if (result[i].fork == true) {
                trueForkCounter++;
            }
            if (result[i].language == "JavaScript") {
                javascriptLanguageCounter++;
            } 
            var columnRow = parseInt(i)+1;
            $("#generatedTableBody").append(
                    "<tr> \n\
                     <td>" + columnRow + "</td>\n\
                     <td> " + result[i].description + "</td>\n\
                     <td> " + result[i].homepage + "</td>\n\
                     <td> " + result[i].fork + "</td>\n\
                     <td> " + result[i].language + "</td>\n\
                    </tr>"
                    ) 
        }
        $("#descText").html("For 'Description',there are " + nullDescriptionCounter + " nulls of " + result.length + " results");
        $("#homePageText").html("For Homepage, there are " + nullHomePageCounter + " nulls of " + result.length + " results");
        $("#mirrorUrlText").html("For Forks, there are " + trueForkCounter + " forks of " + result.length + " results");
        $("#languageText").html("For Homepage, there are " + javascriptLanguageCounter + " projects that use Javascript of " + result.length + " results");

    });
}

