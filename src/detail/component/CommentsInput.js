import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Divider, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const CommentsWrap = styled.div`
    position: static !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 100%;
`;
const StyledButton = styled(Button)`
    height: 40px;
    width: 75px;
    margin-left: 10px;
`;
const StyledTextField = styled(TextField)`
    margin: 0 10px;
    width: 95%;
`;
const InputDatas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: auto;
    padding: 10px 0;
`;
const Characters = styled.div`
    font-size: 0.7rem;
    color: ${props => props.color === "gray"? "#848484":"red"};
    display: flex;
    align-self: flex-end;
`;


export default function Comments(props) {
    const { addComment, contentId, commenter, nick, nextId } = props;
    const [inputValue, setInputValue] = React.useState("");
    const [sendable, setSendable] = React.useState(true);
    const [snack, setSnack] = React.useState(false);

    React.useEffect(()=>{
        if (inputValue.length > 300) setSendable(false);
        if (inputValue.length <= 300) setSendable(true);
    }, [inputValue]);
    
    const handleSubmit = () => {
        if (sendable) {
            if (!commenter || !inputValue) {
                setSnack(true);
                return;
            }
            const comment = { contentId, commenter, content: inputValue, nick, id: nextId };
            addComment({ ...comment , reply:[], createAt: new Date(), like: 0});
            setInputValue("");
        } else {
            setSnack(true);
        }
    };
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleCloseSnackbar = () => {
        setSnack(false);
    };
    return (
        <CommentsWrap>
            <Snackbar open={snack} onClose={handleCloseSnackbar} anchorOrigin={{vertical:'bottom', horizontal:'center'}}>
                <Alert onClose={handleCloseSnackbar} severity="error" variant="filled" style={{fontWeight:"bold"}}>
                    {commenter? "300글자 이하로 작성해주세요." : "로그인 후 이용해주세요."}
                </Alert>
            </Snackbar>
            <StyledTextField
            id="outlined-textarea"
            onChange={handleChange}
            rowsMax={5}
            label={`댓글 달기`}
            placeholder="바르고 고운 말을 사용해주세요."
            multiline
            variant="outlined"
            value={inputValue}
            />
            <InputDatas>
                <Characters color={sendable? "gray":"red"}> 
                    {inputValue.length} / 300
                </Characters>
                <StyledButton 
                variant="contained" 
                color="primary"
                onClick={handleSubmit}
                >
                    입 력
                </StyledButton>
            </InputDatas>
            <Divider />
        </CommentsWrap>
    )
}