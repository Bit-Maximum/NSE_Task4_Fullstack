import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const FooterBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#0288d1',
    padding: theme.spacing(4),
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: '20px',
    color: 'white'
}));

function Footer() {
    return (
        <FooterBox>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} "Коты и продукты". Все права защищены.
                </Typography>

                <Typography variant="body2">
                    © {new Date().getFullYear()} Автор: Меркурьев М.А. Все права защищены.
                </Typography>

                <Typography variant="body2">
                    Контакты: <Link href="mailto:info@temp.com" color={'rgb(255, 255, 255)'}>info@catsandgrosary.com</Link>
                </Typography>
            </Box>
        </FooterBox>
    );
}

export default Footer;