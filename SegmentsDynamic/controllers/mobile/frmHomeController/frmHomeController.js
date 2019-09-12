define({ 
  
  
  	dataInitSegment : function()
    {
		 mstrData=[
// 				Empty Object
                    ];	
        this.view.sgtData.widgetDataMap={dataRow:"dataRow", lblHeader:"lblHeader"};
        this.view.sgtData.setData(mstrData); 
    },

 	
  	onAddNewData : function()
    {
      	var data = this.view.txtDataAdd.text;
      	var sectionName =  this.view.txtSectionAdd.text;
      	var res = this.checkSection(sectionName) ;
      	if(res === -1)
          {
            this.view.sgtData.addSectionAt([[{lblHeader:sectionName, template:"sgtHeaderTmplte"},[{dataRow: data, template:"sgtRowTmplte"}]]] ,0);
          }
      	else
          {
            var segData = this.view.sgtData.data; 
            alert(segData );
            this.view.sgtData.addDataAt({dataRow: data, template:"sgtRowTmplte"} , 0, res); 
          }
		
    },
  
  	checkSection : function(prsntSectionName)
  	{
  		var segData = this.view.sgtData.data;
      	if(segData === null)
          {
            sgtLength = 0;
          }
      else
        {
          sgtLength = segData.length;
        }
      	for(var i=0; i<sgtLength; i++)
          {
            	if(segData[i][0].lblHeader  === prsntSectionName)
                  {
                    return i;
                  }
          }
      return -1;
	}
  	

 });