import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { CropSquare, InsertPhoto, TextFields } from "@material-ui/icons";
import { Grid, Box, Divider, IconButton, Paper } from "@material-ui/core";

const CardCreateField = ({
  setImage = () => {},
}) => {
  const [canvas, setCanvas] = useState();
  const [shapeCount, setShapeCount] = useState(0)

  useEffect(()=>{
    setCanvas(new fabric.Canvas("card", {
      width: 964,
      height: 537,
      preserveObjectStacking: true,
    }));
  }, [])

  const deleteShape = (e) => {
    if(e.key === "Delete"){
      canvas?.getActiveObjects().forEach((obj) => {
        canvas?.remove(obj)
      });
      canvas?.discardActiveObject().renderAll()
    }
  }

  document.addEventListener("keydown", deleteShape)

  const addTextBox = () => {
    const textBox = new fabric.Textbox("Text", {
      width: 20,
      height: 50,
      fontFamily: "Arial",
      id: `shape${shapeCount}`,
    })
    canvas.add(textBox)
    setShapeCount(shapeCount + 1)
  }

  const addRect = () => {
    const rect = new fabric.Rect({
      left: 0,
      top: 0,
      fill: 'black',
      width: 120,
      height: 50,
      id: `shape${shapeCount}`,
    })
    canvas.add(rect)
    setShapeCount(shapeCount + 1)
  }

  const addImage = (e) => {
    const url = URL.createObjectURL(e.target.files[0])
    fabric.Image.fromURL(url, (oImg) => {
      oImg.set({
        id: `shape${shapeCount}`,
      })
      canvas.add(oImg)
    })
  }

  return (
    <>
      <Paper style={{width: 1012}}>
        <Box>
          <Grid container>
            <Grid item>
              <IconButton
                onClick={addTextBox}
              >
                <TextFields
                  fontSize="small"
                />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={addRect}
              >
                <CropSquare
                  fontSize="small"
                />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                component="label"
              >
                <input
                  id="load-image"
                  type="file"
                  accept="image/*"
                  onChange={addImage}
                  hidden
                />
                <InsertPhoto
                  fontSize="small"
                />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box px={3} py={2} style={{width: 964, height: 537}} id="canvas-container">
          <canvas 
            id="card" 
            style={{border: "solid 1px #ccc"}} 
            onChange={() => {
              setImage(canvas.toDataURL())
            }}
            onKeyDown={(e)=>{
              console.log(e.key)
              if(e.key === "delete"){
                canvas?.remove(canvas?.getActiveObject())
                canvas?.renderAll()
              }
            }}
          ></canvas>
        </Box>
      </Paper>
    </>
  );
};

export default CardCreateField;
