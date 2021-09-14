import React, { Component, useEffect, useState } from 'react';
import { Button, Form, Img, ImgBox, Input, Label, Textarea } from "../Input/styles";
import axios from "axios";

// const CourseInput = () => {
//
//   const submitImage = ( e ) => {
//     e.preventDefault()
//
//     const data = new FormData()
//     data.append( 'courseIcon', e.target.image.files[ 0 ] )
//
//     console.log( e.target.image )
//     axios.post( "https://ibs-school.uz:10080/api/v1/images/upload", data, {
//       //something else
//     } )
//       .then( res => {
//           console.log( res )
//           e.target.reset()
//         }
//       )
//       .catch( err => {
//           console.log( err )
//         }
//       )
//   }
//
//   const submitTeacher = ( e ) => {
//     e.preventDefault()
//
//     const [
//       teacherFullName,
//       birthDate,
//       description,
//       image,
//       position ] = e.target
//
//     const form = {
//       teacherFullName: teacherFullName.value,
//       birthDate: birthDate.value,
//       description: description.value,
//       image: image.value,
//       position: position.value
//     }
//
//     axios.post( "https://ibs-school.uz:10080/api/v1/teachers", form )
//       .then( res => {
//         console.log( res )
//       } )
//       .catch( err => {
//         console.log( err )
//       } )
//       .finally( res => {
//         console.log( res )
//       } )
//   }
//
//   const submitCourse = ( e ) => {
//     e.preventDefault()
//
//     const [
//       courseNameUz,
//       courseNameRu,
//       descriptionUz,
//       descriptionRu,
//       category,
//       course,
//       tags,
//       duration,
//       discount,
//       courseIcon ] = e.target
//
//     const form = {
//       courseName_uz: courseNameUz.value,
//       courseName_ru: courseNameRu.value,
//       description_uz: descriptionUz.value,
//       description_ru: descriptionRu.value,
//       category: category.value,
//       subCategory: course.value,
//       tags: tags.value,
//       duration: duration.value,
//       discount: discount.value,
//       courseIcon: courseIcon.value
//     }
//
//     axios.post( "https://ibs-school.uz:10080/api/v1/courses", form )
//       // axios.post( "localhost:8080/api/v1/image/files/upload", e.target.courseIcon )
//       .then( res => {
//         console.log( res )
//       } )
//
//     // console.log(e.target.courseIcon.file)
//   }
//
//   let ids = []
//   const [ state, setState ] = useState( [] )
//
//   useEffect( () => {
//     setState( [] )
//     axios.get( "https://ibs-school.uz:10080/api/v1/images/files" )
//       .then( res => {
//         console.log( res )
//         res.data.map( data => {
//           const url = data.url.split( '/' )
//           ids.push( url[ url.length - 1 ] )
//           setState( prevState => [ ...prevState, url[ url.length - 1 ] ] )
//         } )
//       } )
//     console.log(state)
//   }, [] )
//   return (
//     <>
//       <ImgBox>
//         { state.map( id => (
//           <div key={id}>
//             <Img src={ `https://ibs-school.uz:10080/api/v1/images/files/${ id }` } alt={ id }/>
//             <p>{ id }</p>
//           </div>
//         ) ) }
//       </ImgBox>
//
//       <Form onSubmit={ submitImage }>
//         <Label>Input Image</Label>
//         <Input type="file" name="image"/>
//         <Button>Submit</Button>
//       </Form>
//
//       {/*<Form onSubmit={ submitCourse }>*/}
//       {/*  <h1>Courses Form</h1>*/}
//       {/*  <Label>Course Name Uz</Label>*/}
//       {/*  <Input name={ "courseNameUz" } type={ "text" }/>*/}
//       {/*  <br/>*/}
//       {/*  <Label>Course Name Ru</Label>*/}
//       {/*  <Input name={ "courseNameRu" } type={ "text" }/>*/}
//       {/*  <br/>*/}
//       {/*  <Label>Description Uz</Label>*/}
//       {/*  <Textarea name={ "descriptionUz" } row={ 2 }/>*/}
//       {/*  <br/>*/}
//       {/*  <Label>Description Ru</Label>*/}
//       {/*  <Textarea name={ "descriptionRu" } row={ 2 }/>*/}
//       {/*  <br/>*/}
//       {/*  <Label>Category</Label>*/}
//       {/*  <Input name={ "category" } type={ "text" }/>*/}
//       {/*  <br/>*/}
//       {/*  <Label>Course</Label>*/}
//       {/*  <Input name={ "course" } type={ "text" }/>*/}
//       {/*  <br/>*/}
//       {/*  <Label>Tags</Label>*/}
//       {/*  <Input name={ "tags" } type={ "text" }/>*/}
//       {/*  <br/>*/}
//       {/*  <Label>Duration</Label>*/}
//       {/*  <Input name={ "duration" } type={ "number" }/>*/}
//       {/*  <br/>*/}
//       {/*  <Label>Discount</Label>*/}
//       {/*  <Input name={ "discount" } type={ "number" }/>*/}
//       {/*  <br/>*/}
//       {/*  <Label>Image</Label>*/}
//       {/*  <Input name={ "courseIcon" } type={ "text" }/>*/}
//       {/*  <br/>*/}
//       {/*  <Button>submit</Button>*/}
//       {/*</Form>*/}
//
//       <Form onSubmit={ submitTeacher }>
//
//         <h1>Teachers Form</h1>
//
//         <Label>Full Name</Label>
//         <Input name={ "teacherFullName" } type={ "text" }/>
//         <br/>
//         <Label>Birth Date</Label>
//         <Input name={ "birthDate" } type={ "date" }/>
//         <br/>
//         <Label>Description</Label>
//         <Textarea name={ "description" }/>
//         <br/>
//         <Label>Image</Label>
//         <Input name={ "image" } type={"text"}/>
//         <br/>
//         <Label>Position</Label>
//         <Input name={ "position" } type={"text"}/>
//         <br/>
//         <Button>Submit</Button>
//       </Form>
//
//     </>
//   );
// }
//
// export default CourseInput;