import React, {useState, useEffect} from "react"
import {
    ClientId,
    Email,
    FullName,
    FullNameBox,
    PhoneNumber,
    TableRow,
    TableWrapper,
    WrapperTeachersList,
    DeleteBox, DeletionBackground, DeletionPage, DeletionText, ActionsBox, Edit, Delete, TableRowWrapper
} from "./styles";
// import img from "../../assets/images/firebird.png"
import {useDispatch, useSelector} from "react-redux";
import {getClientsList} from "../../redux/modules/clientsList/clientsListAction";

//icons
import PageTitleAdd from "../PageTitleAdd";
import Loading from "../Loading";
import ErrorBox from "../ErrorBox";
// import {getClientId} from "../../redux/modules/clientId/clientIdAction";
import {ReactComponent as Bin} from "../../assets/icons/bin.svg";
import {ReactComponent as ArrowIcon} from "../../assets/icons/arrow.svg";
import {link} from "../../baseLink/link";
import axios from "axios";
import {httpRequest} from "../../util/httpRequest";

const ClientsList = ({setId}) => {

    const [deletionData, setDeletionData] = useState({popUp: false, data: {}})

    // const history = useHistory()

    const dispatch = useDispatch()

    const deleteClientById = (id) => {
        axios(httpRequest(`client-student/${id}`,"DELETE"))
            // .delete(`${link}/client-student/${id}`)
            .then(res => {
                setDeletionData({popUp: false, data: {}})
                getClientsListDispatch()
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        ;
    }

    const getClientsListDispatch = () => {
        dispatch(getClientsList())
    }


    useEffect(() => {
        getClientsListDispatch()
    }, [getClientsList])
    const clients = useSelector(state => state.clientsListReducer)

    // const deleteTeacherById = (id) => {
    //     axios.delete(`${link}/teachers/${id}`)
    //         .then(res => {
    //             console.log(res)
    //             getTeachersDispatch()
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //
    // }

    const {loading, error, clientsList} = clients
    return (
        <>
            <WrapperTeachersList>
                <PageTitleAdd title={"Clients"} link={"/clients/add"}/>
                {loading && <Loading/>}
                {error && <ErrorBox/>}
                {(!loading && !error && clientsList === 0) && "Empty"}
                <TableWrapper>
                    {(!loading && !error) &&
                    clientsList?.map(({
                                          id,
                                          firstName,
                                          lastName,
                                          email,
                                          phoneNumber
                                      }) => {
                            // const dob = birthDate.split("T")[0].split("-");
                            return (
                                <TableRowWrapper key={id}>
                                    <DeleteBox onClick={() => {
                                        setDeletionData({popUp: true, data: {id, firstName, lastName, email, phoneNumber}})
                                        // handleDelete(id)
                                    }} className={"bin"}>
                                        <Bin/>
                                    </DeleteBox>
                                    <TableRow to={`/clients/id/${id}`}
                                        // onClick={() => {
                                        // dispatch(getClientId(id))
                                        //       }}
                                    >

                                        <ClientId>
                                            {id}
                                            {/*<img src={`${link}/images/files/${image}`} alt=""/>*/}
                                        </ClientId>
                                        <FullNameBox>
                                            <FullName>
                                                {firstName} {lastName}
                                            </FullName>
                                            <Email>
                                                {email}
                                            </Email>
                                        </FullNameBox>
                                        <PhoneNumber>
                                            {phoneNumber}
                                        </PhoneNumber>

                                        {/*<ActionBox>*/}
                                        {/*    <Edit bgColor={"green"} onClick={() => {*/}
                                        {/*        history.push("/teachers/add")*/}
                                        {/*        setEditValue({*/}
                                        {/*            id,*/}
                                        {/*            teacherFullName,*/}
                                        {/*            birthDate,*/}
                                        {/*            description,*/}
                                        {/*            image,*/}
                                        {/*            position*/}
                                        {/*        })*/}
                                        {/*    }}>*/}
                                        {/*        <EditIcon/>*/}
                                        {/*    </Edit>*/}
                                        {/*    <Delete bgColor={"red"} onClick={() =>*/}
                                        {/*        setDeletionData({*/}
                                        {/*            popUp: true,*/}
                                        {/*            data: {*/}
                                        {/*                id,*/}
                                        {/*                teacherFullName,*/}
                                        {/*                birthDate,*/}
                                        {/*                description,*/}
                                        {/*                image,*/}
                                        {/*                position*/}
                                        {/*            }*/}
                                        {/*        })}>*/}
                                        {/*        <DeleteIcon/>*/}
                                        {/*    </Delete>*/}
                                        {/*</ActionBox>*/}

                                        {/*</CardBox>*/}
                                    </TableRow>
                                </TableRowWrapper>)
                        }
                    )
                    }
                </TableWrapper>
            </WrapperTeachersList>
            {deletionData.popUp &&
            <DeletionBackground>
                <DeletionPage>
                    {/*<DeletionImg>*/}
                    {/*    <img src={`${link}/images/files/${deletionData.data?.image}`} alt=""/>*/}
                    {/*</DeletionImg>*/}
                    <DeletionText>
                        {`${deletionData.data?.firstName} ${deletionData.data?.lastName}`}
                        <br/>
                        <small>{deletionData.data?.position}</small>
                    </DeletionText>
                    <DeletionText>Do you really want to delete me 😭</DeletionText>
                    <ActionsBox>
                        <Edit bgColor={"green"} onClick={() => {
                            setDeletionData({popUp: false, data: {}})
                        }}>
                            <ArrowIcon/>
                        </Edit>
                        <Delete bgColor={"red"} onClick={() =>
                            deleteClientById(deletionData.data?.id)
                        }>
                            <Bin/>
                        </Delete>
                    </ActionsBox>
                </DeletionPage>
            </DeletionBackground>}
        </>
    )
}

export default ClientsList