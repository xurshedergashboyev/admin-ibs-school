import React, {useEffect, useState} from "react"
import axios from "axios";
import {
    ActionsBox, Add,
    CopiedMessage,
    Copy,
    Delete, DeletionBackground, DeletionImg, DeletionPage, DeletionText,
    ImageBox,
    ImageData,
    ImageId,
    ImagesBox,
    Img,
    ImgBox,
    NavbarBox, PageTitle
} from "./styles";
import {CopyToClipboard} from 'react-copy-to-clipboard';


//icon
import {ReactComponent as CopyIcon} from "../../assets/icons/copy.svg"
import {ReactComponent as DeleteIcon} from "../../assets/icons/bin.svg"
import {ReactComponent as PlusIcon} from "../../assets/icons/plus-img.svg"
import {ReactComponent as Arrow} from "../../assets/icons/arrow.svg"
import {link} from "../../baseLink/link";
import PageTitleAdd from "../PageTitleAdd";
import Loading from "../Loading";
import ErrorBox from "../ErrorBox";
import {httpRequest} from "../../util/httpRequest";

const ImagesList = () => {

    let ids = []
    const [state, setState] = useState([])

    const [copied, setCopied] = useState({copied: false, text: ''})

    const [deletionData, setDeletionData] = useState({popUp: false, id: ''})

    const [gettingProcess, setGettingProcess] = useState({loading: false, error: false})
    const {loading, error} = gettingProcess
    const getImages = () => {
        setGettingProcess({loading: true, error: false})
        setState([])
        axios(httpRequest("images/files", "GET"))
            // .get(`${link}/images/files`)
            .then(res => {
                console.log(res)
                res.data.map(data => {
                    const url = data.url.split('/')
                    ids.push(url[url.length - 1])
                    setState(prevState => [...prevState, url[url.length - 1]])
                })
                setGettingProcess({loading: false, error: false})
            })
            .catch(err => {
                setGettingProcess({loading: false, error: true})
            })
    }
    useEffect(() => {
        getImages()
        console.log(state)
    }, [])

    const deleteImage = (id) => {
        axios(`images/${id}`,"DELETE")
            // .delete(`${link}/images/${id}`)
            .then(res => {
                setDeletionData({popUp: false, id: ''})
                getImages()
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {

            })
        console.log(id)
    }

    return (
        <>
            <PageTitleAdd title={"Images"} link={"/images/add"}/>
            {loading && <Loading/>}
            {error && <ErrorBox/>}
            <ImagesBox>
                {(!loading && !error) &&
                state.map(id => (
                    <ImageBox key={id}>
                        <ImgBox>
                            <Img src={`${link}/images/files/${id}`} alt={id}/>
                        </ImgBox>
                        <ImageData className={"data"}>
                            {copied.text === id && <CopiedMessage>{copied.text === id && "copied"}</CopiedMessage>}
                            <ActionsBox>
                                <CopyToClipboard text={id}
                                                 onCopy={
                                                     () => {
                                                         setCopied({copied: true, text: id});
                                                         setTimeout(
                                                             () => setCopied({copied: false, text: ''}), 5000
                                                         )
                                                     }
                                                 }>
                                    <Copy>
                                        <CopyIcon/>
                                    </Copy>
                                </CopyToClipboard>
                                <Delete onClick={() => setDeletionData({popUp: true, id: id})}>
                                    <DeleteIcon/>
                                </Delete>
                            </ActionsBox>
                        </ImageData>
                    </ImageBox>
                ))}
            </ImagesBox>

            {deletionData.popUp &&
            <DeletionBackground>
                <DeletionPage>
                    <DeletionImg>
                        <img src={`${link}/images/files/${deletionData.id}`} alt="deletion image"/>
                    </DeletionImg>
                    <DeletionText>
                        Are you sure. you want to delete this image
                    </DeletionText>
                    <ActionsBox>
                        <Copy onClick={() => setDeletionData({popUp: false, id: ''})}>
                            <Arrow/>
                        </Copy>
                        <Delete onClick={() => {
                            deleteImage(deletionData.id)
                        }}>
                            <DeleteIcon/>
                        </Delete>
                    </ActionsBox>
                </DeletionPage>
            </DeletionBackground>}
        </>

    )
}

export default ImagesList