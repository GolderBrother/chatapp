import React, { useEffect } from 'react';
import {
  Button, Alert, Paper, Badge, Box,
  Dialog, DialogContent, DialogActions, DialogTitle, DialogContentText, TextField, Stack,
} from '@mui/material';
import iconPNG from '../assets/logo.svg';
import { Trans, useTranslation } from 'react-i18next'
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
          <Trans 
              i18nKey="About Message"
              values={{ Author: "GolderBrother" }}
              components={[<a href={`https://chatapp.xyz/redirect_app/author/${props.lang}`} target='_blank' rel="noreferrer"></a>]}
          />
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
          <span>{t("Auther Message")}</span>
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