var app = new Vue({
    el: "#app",
    data: {
      fullName:"Kirill Konorev",
      text:"",
    }, //end data

    computed:{

      nameReverse:function(){
        return this.fullName.split('').reverse().join('');
      },//end nameReverse

      daysLeft:function(){
        var d = new Date();
        return 30 - d.getDate() + "  days left";
      },

      charCheck: function(){
        return this.text.length;
      }

    }//end computed

  }); //end vue