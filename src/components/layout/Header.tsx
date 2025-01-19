'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import SearchBar from '../ui/SearchBar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.appBar,
}));

const LogoTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  background: 'linear-gradient(45deg, #ffffff 30%, #e3f2fd 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledAppBar>
      <Container maxWidth="xl">
        <Toolbar 
          sx={{ 
            minHeight: { xs: '56px', sm: '64px' },
            px: { xl: '24px' }, 
            gap: { xl: 15 }, 
          }}
        >
          <Box 
            sx={{ 
              flex: { xs: 1, md: '0 0 200px', xl: '0 0 300px' },
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <LogoTypography
              variant={isMobile ? "subtitle1" : "h6"}
              sx={{
                fontSize: { 
                  xs: '1rem', 
                  sm: '1.2rem', 
                  md: '1.5rem',
                  xl: '1.8rem'
                },
              }}
            >
              🛍️ TechBrands
            </LogoTypography>
          </Box>

          {!isMobile && (
            <Box 
              sx={{ 
                flex: { md: 1, xl: '0 0 600px' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <SearchBar />
            </Box>
          )}

          <Box 
            sx={{ 
              flex: { xs: 'none', md: '0 0 200px', xl: '0 0 300px' },
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: { xs: 1, sm: 2, xl: 3 },
            }}
          >
            {!isMobile && (
              <>
                <IconButton 
                  color="inherit" 
                  size={isMobile ? "small" : "medium"}
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                    width: { xl: 48 },
                    height: { xl: 48 },
                  }}
                >
                  <NotificationsIcon 
                    sx={{ 
                      fontSize: { 
                        xs: '1.2rem', 
                        sm: '1.5rem',
                        xl: '1.8rem' 
                      } 
                    }} 
                  />
                </IconButton>
                <IconButton 
                  color="inherit"
                  size={isMobile ? "small" : "medium"}
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                    width: { xl: 48 },
                    height: { xl: 48 },
                  }}
                >
                  <ShoppingCartIcon 
                    sx={{ 
                      fontSize: { 
                        xs: '1.2rem', 
                        sm: '1.5rem',
                        xl: '1.8rem' 
                      } 
                    }} 
                  />
                </IconButton>
              </>
            )}
            <Avatar
              sx={{
                width: { xs: 32, sm: 40, xl: 48 },
                height: { xs: 32, sm: 40, xl: 48 },
                bgcolor: 'rgba(255,255,255,0.9)',
                color: 'primary.main',
                fontWeight: 'bold',
                fontSize: { xs: '0.9rem', sm: '1.1rem', xl: '1.3rem' },
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              U
            </Avatar>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}