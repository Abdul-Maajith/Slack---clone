import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOptions from './SidebarOptions';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "./firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from './firebase';

const SideBar = () => {
    const [channels, loading, error] = useCollection(db.collection("rooms"))
    const [user] = useAuthState(auth);

    return (
        <SidebarContainer>
          <SidebarHeader>
               <SidebarInfo>
                  <h2>Brandad's HQ</h2>
                  <h3>
                    <FiberManualRecordIcon />
                    {user.displayName}
                  </h3>
               </SidebarInfo>
               <CreateIcon />
          </SidebarHeader>

          <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
          <SidebarOptions Icon={InboxIcon} title="Mentions & Reactions" />
          <SidebarOptions Icon={DraftsIcon} title="Saved Items" />
          <SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser" />
          <SidebarOptions Icon={PeopleAltIcon} title="People & User Groups" />
          <SidebarOptions Icon={AppsIcon} 
          title="Apps" />
          <SidebarOptions Icon={FileCopyIcon} title="File Browser" />
          <SidebarOptions Icon={ExpandLessIcon} title="Show Less" />

          <hr />
          <SidebarOptions Icon={ExpandMoreIcon} title="Show More" />
          <hr />
          <SidebarOptions Icon={AddIcon} addChannelOption  title="Add Channel" />

          {channels?.docs.map((doc) => {
            return (
            <SidebarOptions 
             key={doc.id}
             id={doc.id}  
             title={doc.data().name}
            />
            )
          })}

        </SidebarContainer>
    )
}

export default SideBar

const SidebarContainer = styled.div`
   background-color: var(--slack-color);
   color: white;
   flex: 0.3;
   border-top: 1px solid #49274b;
   max-width: 260px;
   margin-top: 60px;
   overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

   > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b; 
   }
`;

const SidebarHeader = styled.div`
   display: flex;
   border-bottom: 1px solid #49274b;
   padding: 13px;

   > .MuiSvgIcon-root {
     padding: 8px;
     color: #49274b;
     font-size: 18px;
     background-color: white;
     border-radius: 999px;
   }
`;

const SidebarInfo = styled.div`
   flex: 1;

   > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
   }

   > h3 {
    font-size: 13px;
    font-weight: 400;
    display: flex;
    align-items: center;
   } 

   > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
   }
`;

// Another Method..

// const SideBar = () => {
//     const [channel, setChannel] = useState([]);

//     useEffect(() => {
//       db.collection("rooms").onSnapshot(snapshot => {
//         setChannel(snapshot.docs.map((doc) => doc.data()))
//       })
//     }, [])

//     console.log(channel);

//     return (
//         <SidebarContainer>
//           <SidebarHeader>
//            <SidebarInfo>
//              <h2>Brandad's HQ</h2>
//              <h3>
//                <FiberManualRecordIcon />
//                Abdul Maajith
//              </h3>
//            </SidebarInfo>
//            <CreateIcon />
//           </SidebarHeader>

//           {channel.map((doc) => {
//             return(
//               <SidebarOptions  
//              title={doc.name}
//              key={doc.id}
//              id={doc.id}
//             />
//             )
//           })}

//         </SidebarContainer>
//     )
// }




