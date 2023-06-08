import React, { useState ,useEffect} from "react";

  // to get the data from local storage
const getLocalItems=()=>{
  let list=localStorage.getItem('lists');
  console.log(list);

  if(list){
    return JSON.parse(localStorage.getItem('lists'));
  }
  else{
    return [];
  }
}
const Todo = () => {
  const [inputData,setInputData]=useState('');
  const [items, setItems]=useState(getLocalItems());  


  const addItem=()=>{
    if(!inputData){
      // Do nothing
    }
    else{
      setItems([...items,inputData]);  //Spread Oparator
      setInputData("");
    }
  }


  // To delete the one particular item
  const deleteItem=(id)=>{
    const updatedItems=items.filter((elem,ind)=>{
        return ind !=id;
    });

    setItems(updatedItems);
  }

  // To remove all items
  const removeAll=()=>{
    setItems([]);
  }


  // add data to local storage
  useEffect(() => {
    localStorage.setItem('lists',JSON.stringify(items));
  }, [items])
  


  

  return (
    <>
      <div className="container">
        <div className="main-div">
          <div className="child-div">
            <figure>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8DAQQAAACSkZKWlZZDQ0S8u7y/v8AbGhz4+Pienp4/Pj+3t7d6eXo4Nzju7u7Z2NlgX2AgHyDOzs7k5OSBgIEXFhirq6ssLC0xMDFJSEkkIyXz8/MQDhGMjIxzc3RoZ2ijoqPHx8e9fAQnAAAD/klEQVR4nO3d6VajQBCG4VCCWZ1kNJDFbHr/FzksSehAAa02Ul3zvb/iwgnPAVSgG0cjrnUYJRT4FCVRuGYtXNOY0oZe5y+WrXI8tQRG3vGKiCI74t5PXxbtbYAbf4EpcWMh3Hot3HUDV54ehEVEq07hwmdgSlx0CkPPhbNO4ZPnwhBCCKUHIYTy+46QZPdzIe3Gz3Ib76qr+w1h1LnIkEUQ1oNQWBAyQSgsCJkgFBaETBAKC0ImCIUFIROEwoKQCUJhQcgEobAgZIJQWBAyQSgsCJkgFBaETBAKq1fhpGMciFNJU70K/7SOLaKJU0lTEDJBWPb/CouxZoqFRElm1CskehudUuJNOHM1CHEpRJgBRylRrbAAZrPDSiG3pb+cFOENuJzoEZI5SvcOfDf3Ur+FdHyOqVyLEqhFmE8VO9Ej8PCab1wVQqJ8cnFBNI7BQI/wWLzKiA+7qBphQPGN+LiL6hEaxOsWvAHVCAN6KT4oZvvfdlFNwvtWrAAVCQ3iYWL+9tcjvBOXJlCV8Eo0d1FtwoBONeBdGOo4e6L47b263FX4NnMU/1CPXzt7ovpEQLVXMSB0HIRMEJZt23+6B04lTfUqPL3ErTmVNIU7pEwQCgtCJgiFBSEThMLqVXj+29rFJaSxXoW79r9Lj04lTeHcggnCMgidSpoaaEyUeQ+45wYZE3Va7437+OPzi5sOUoTZ9e9pRNqueRvf/pR/batnPE11PU7F1+aKhA+X82/As6IRQ3Qx7/uWQC1Cyp4Qfn+T6zE4upi/LXwXZo9AP+yvu6uxBbUIKclfHOb5/vpkApUIAxrnr6bZADBzF1UkpOeCGFWBWoTpGxdbcflRfO5c3ttXIkzf+dP4VAnUI7xvxayLsaweoUE8m4sqEt6JD0BVwuuxeHlcUNd8i2wrXqrLXYWb3dxNA4+JomN1Z1R3FaN2tKkT1oLQURAyfW1GSUuJU0lTvQqjyWtLE4v/nuUg3CFlglBYEDJBKCwImSAUFoRM9sJN+yyeD6eSpoYcE6XgOVFz9WdPEDqVNAUhE4RldsLVwlEDzCG1E/o8JspO6POdGQghhBBCCCGEEEIIIYQQwt8T6j8/HE0dxa+EBGG/QcgEYRmETiVNDfmcKAX3ntar9pxKmsI9YCYIhQUhE4TCgpAJQmFByAShsCBkglBYEDJBKCwImSAUFoRMEAoLQiYIhQUhE4TCgpAJQmFByAShsFwId59juX3ufi4MXI0t7Knq2n5D6FcQQig/CCGUn4Uw9Fw46xQuPBcuOoWr2p8JPkVkMax167XQ5mmNG6+FGwvhaO8vkfY2wOzfAPhpJIoa5g7ViDFzWiK9bJVjS2DaOowSv4iUROGatfwDQdebL5XBHAsAAAAASUVORK5CYII="
                alt="todologo"
              ></img>
              <figcaption>Task List🎯</figcaption>
            </figure>


            <div className="addItems">
              <input type="text" placeholder="📝 Add items"
              
                value={inputData}
                onChange={(e)=>setInputData(e.target.value)}
              />
              <i className="fa fa-plus add-btn" title="Add item" onClick={addItem}></i>
            </div>



            <div className="showItems">
                {
                    items.map((elem, ind)=>{
                        return (
                          <div className="eachItem" key={ind}>
                            <h3>{elem}</h3>
                            <i className="far fa-trash-alt add-btn" title="Delete" onClick={()=>deleteItem(ind)}></i>
                          </div>
                        )
                    })
                }
            </div>


            <div className="showItems">
                <button className="btn effect04" data-sm-link-text="Remove all" onClick={removeAll}>
                  <span>TO-DO LIST</span>
                </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
