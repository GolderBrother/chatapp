import React, { useCallback, useEffect, useRef } from 'react';
import {
  ListItemText, MenuItem, Divider,
  IconButton, Typography, ListItemIcon,
} from '@mui/material';
import { Message, Session } from '../../types'
import FileCopyIcon from '@mui/icons-material/FileCopy';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import StyledMenu from '../StyledMenu';
import { useTranslation } from "react-i18next";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import './index.scss';

const { useState } = React

export interface Props {
  session: Session
  selected: boolean
  switchMe: () => void
  deleteMe: () => void
  copyMe: () => void
  switchStarred: () => void
  editMe: () => void
}

export default function SessionItem(props: Props) {
  const { t } = useTranslation()
  const { session, selected, switchMe, deleteMe, copyMe, switchStarred, editMe } = props
  const [hovering, setHovering] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    event.preventDefault()
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const getLastMessage = useCallback(() => {
    return Array.isArray(session.messages) ? session.messages[session.messages.length - 1] ?? {} : {};
  }, [session.messages]);
  const getLastMessageContent = () => {
    return (getLastMessage() as Message)?.content ?? '';
  }
  return (
    <MenuItem
      key={session.id}
      selected={selected}
      onClick={() => switchMe()}
      onMouseEnter={() => {
        setHovering(true)
      }}
      onMouseOver={() => {
        setHovering(true)
      }}
      onMouseLeave={() => {
        setHovering(false)
      }}
    >
      <ListItemIcon>
        <IconButton>
          <img className='session-icon' src={session.icon} alt="icon" />
          {/* <ChatBubbleOutlineOutlinedIcon fontSize="small" /> */}
        </IconButton>
      </ListItemIcon>
      <ListItemText>
        <Typography variant="inherit" noWrap>
          {session.name}
        </Typography>
        <Typography variant="inherit" noWrap>
          {getLastMessageContent() as string}
        </Typography>
      </ListItemText>
      {
        <IconButton onClick={handleClick} sx={{ color: 'primary.main' }} >
          {
            session.starred ? (
              <StarIcon fontSize="small" />
            ) : (
              hovering && (
                <MoreHorizOutlinedIcon fontSize="small" />
              )
            )
          }
        </IconButton>
      }
      <StyledMenu
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem key={session.id + 'edit'} onClick={() => {
          editMe()
          handleClose()
        }} disableRipple>
          <EditIcon />
          {t('rename')}
        </MenuItem>

        <MenuItem key={session.id + 'copy'} onClick={() => {
          copyMe()
          handleClose()
        }} disableRipple>
          <FileCopyIcon fontSize='small' />
          {t('copy')}
        </MenuItem>
        <MenuItem key={session.id + 'star'} onClick={() => {
          switchStarred()
          handleClose()
        }} disableRipple>
          {
            session.starred ? (
              <>
                <StarOutlineIcon fontSize="small" />
                {t('unstar')}
              </>
            ) : (
              <>
                <StarIcon fontSize="small" />
                {t('star')}
              </>
            )
          }
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem key={session.id + 'del'} onClick={() => {
          setAnchorEl(null)
          handleClose()
          deleteMe()
        }} disableRipple
        >
          <DeleteForeverIcon />
          {t('delete')}
        </MenuItem>

      </StyledMenu>
    </MenuItem>
  )
}