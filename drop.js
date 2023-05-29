//https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
//https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications
//https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsText

//Process the drop

function dropHandler(ev) {
    console.log('File(s) dropped');
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === 'file') {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
          const reader = new FileReader();

          reader.addEventListener("load", () => {
            // this will then display a text file
            editor.setValue(JSON.parse(reader.result))
          }, false);

        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  }


//Prevent the browser's default drag behavior

function dragOverHandler(ev) {
    console.log('File(s) in drop zone');
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}

