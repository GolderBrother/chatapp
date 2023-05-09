import React, { useEffect } from 'react';
import {
  Button, Alert, Paper, Badge, Box,
  Dialog, DialogContent, DialogActions, DialogTitle, DialogContentText, TextField, Stack,
} from '@mui/material';
import iconPNG from '../assets/logo.svg';
import { useTranslation } from 'react-i18next'
import * as api from '../api'

interface Props {
  open: boolean
  version: string
  lang: string
  close(): void
}

const DOC_BASE_URL = 'https://github.com/GolderBrother';

export default function AboutWindow(props: Props) {
  const { t } = useTranslation()
  return (
    <Dialog open={props.open} onClose={props.close} fullWidth >
      <DialogTitle>{t('About Chatapp')}</DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: 'center' }}>
          <img alt="Chatapp" src={iconPNG} style={{ width: '100px' }} />
          <h3>Chatapp(v{props.version})</h3>
          <p>
            {t('Your Ultimate Copilot on the Desktop. Chatapp is a free and open-source desktop application and devtools for GPT. Made by')}
            <a href={`https://chatappapp.xyz/redirect_app/author/${props.lang}`} target='_blank' rel="noreferrer"> jamesezhang </a>
            {t('and the community.')}
          </p>
        </Box>
        <Stack spacing={2} direction="row" sx={{ justifyContent: 'center', marginTop: '30px' }}>
          <Badge color="primary" variant="dot" invisible={false}>
            <Button variant="outlined"
              onClick={() => api.openLink(`${DOC_BASE_URL}/check_update/${props.lang}`)}
            >
              {t('Check Update')}
            </Button>
          </Badge>
          <Button variant="outlined"
            onClick={() => api.openLink(`${DOC_BASE_URL}/homepage/${props.lang}`)}
          >
            {t('Homepage')}
          </Button>
          <Button variant="outlined"
            onClick={() => api.openLink(`${DOC_BASE_URL}/feedback/${props.lang}`)}
          >
            {t('Feedback')}
          </Button>
          <Button variant="outlined"
            onClick={() => api.openLink(`${DOC_BASE_URL}/roadmap/${props.lang}`)}
          >
            {t('Roadmap')}
          </Button>
        </Stack>
        <Paper elevation={3} sx={{ padding: '5px 20px', backgroundColor: 'paper', marginTop: '30px' }}>
          <p>{t("I made Chatapp for my own use and it's great to see so many people enjoying it! If you'd like to support development, a donation would be greatly appreciated, though it is entirely optional. Many thanks, Benn")}</p>
          <Stack spacing={2} direction="row">
            <Button variant="text" onClick={() => api.openLink(`${DOC_BASE_URL}/donate/${props.lang}`)} >
              {t('Donate')}
            </Button>
            <Button variant="text" onClick={() => api.openLink(`${DOC_BASE_URL}/become_sponsor/${props.lang}`)} >
              {t('Or become a sponsor')}
            </Button>
          </Stack>
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.close}>{t('close')}</Button>
      </DialogActions>
    </Dialog>
  );
}