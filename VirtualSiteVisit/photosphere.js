var speechtext = [];

speechtext.push("welcome to lavaa-sa,Lavasa is a private planned city being built near Pune.It is stylistically based on the Italian town Portofino, with a street and several buildings bearing the name of that town. it is a 25,000 acres or 8,000 acresproject being developed by HCC. lavaa-sa is best accessed by road. The access points through which you can get to lavaa-sa are from pune Via Chandini Chowk through Pirangut and From Mumbai Via the Mumbai-Pune Expressway. We can also reach lavaa-sa through Mumbai-Goa Highway Via Kolad . We are currently on the lavaa-sa bridge, please feel free to look around"); //xml not taking variable, see later

speechtext.push('We have reached the middle of the bridge');

function speak(data) {

    responsiveVoice.speak(data);

}