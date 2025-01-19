'use client';
import { Container, Box, Stack, Typography, useTheme, useMediaQuery, Chip } from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from '@/components/layout/Header';
import BrandCard from '@/components/ui/BrandCard';
import { brandCards } from '@/lib/data';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarIcon from '@mui/icons-material/Star';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isExtraLarge = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <Box sx={{ 
      bgcolor: '#f8faff',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%)'
    }}>
      <Header />
      <Container 
        maxWidth="xl" 
        sx={{ 
          mt: { xs: 2, sm: 3, md: 4 }, 
          pb: { xs: 2, sm: 3, md: 4 },
          px: { xs: 1, sm: 2, md: 3, xl: 4 },
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Grid 
          container 
          spacing={{ xs: 2, sm: 2, md: 3, }}
          sx={{
            maxWidth: { xl: '1800px' },
            justifyContent: 'center'
          }}
        >
          
          {/* Main Content */}
          <Grid 
            item 
            xs={12} 
            sm={10} 
            md={7} 
            lg={6}
            xl={5}
            sx={{ 
              order: { xs: 2, md: 1 }
            }}
          >
            <Box sx={{ 
              backgroundColor: 'white',
              borderRadius: { xs: 1, sm: 2 },
              p: { xs: 1.5, sm: 2, md: 3, xl: 4 },
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 6px 16px rgba(0,0,0,0.1)'
              }
            }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                mb: { xs: 2, sm: 3, xl: 4 }
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TrendingUpIcon sx={{ 
                    color: 'primary.main',
                    fontSize: { xs: '1.5rem', sm: '1.8rem', xl: '2rem' }
                  }} />
                  <Typography 
                    variant={isMobile ? "h6" : "h5"} 
                    sx={{ 
                      fontWeight: 700, 
                      color: '#1a237e',
                      fontSize: { 
                        xs: '1.1rem', 
                        sm: '1.3rem', 
                        md: '1.5rem',
                        xl: '1.8rem' 
                      },
                      letterSpacing: '-0.5px'
                    }}
                  >
                    Featured Products
                  </Typography>
                </Box>
                <Chip
                  label="View All"
                  color="primary"
                  sx={{ 
                    fontWeight: 600,
                    '&:hover': { 
                      transform: 'scale(1.05)',
                      bgcolor: 'primary.dark'
                    }
                  }}
                  clickable
                />
              </Box>

              <Grid 
                container 
                spacing={{ xs: 1.5, sm: 2, md: 2.5, xl: 3 }}
              >
                {brandCards.map((card) => (
                  <Grid 
                    item 
                    xs={12} 
                    key={card.id}
                    sx={{
                      transition: 'transform 0.2s ease',
                      '&:hover': {
                        transform: 'scale(1.02)'
                      }
                    }}
                  >
                    <BrandCard {...card} isMobile={isMobile} />
                  </Grid>
                ))}
              </Grid>

              {/* Pagination */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                mt: { xs: 2, sm: 3, xl: 4 },
                gap: { xs: 0.5, sm: 1, xl: 1.5 }
              }}>
                {[1, 2, 3].map((page) => (
                  <Box
                    key={page}
                    sx={{
                      width: { xs: 30, sm: 35, xl: 40 },
                      height: { xs: 30, sm: 35, xl: 40 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 1,
                      bgcolor: page === 1 ? 'primary.main' : 'transparent',
                      color: page === 1 ? 'white' : 'text.primary',
                      cursor: 'pointer',
                      fontSize: { xs: '0.9rem', sm: '1rem', xl: '1.1rem' },
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: 'primary.light',
                        color: 'white',
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    {page}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right Sidebar */}
          <Grid 
            item 
            xs={12} 
            sm={10} 
            md={5} 
            lg={4}
            xl={3}
            sx={{ 
              order: { xs: 1, md: 2 },
              ml: { md: 'auto' }
            }}
          >
            <Stack 
              spacing={{ xs: 2, sm: 3, xl: 4 }}
              sx={{ 
                maxWidth: { sm: '500px', md: '100%' }, 
                mx: { xs: 'auto', md: 0 } 
              }}
            >
              {/* Featured Brands */}
              <Box sx={{
                bgcolor: 'white',
                borderRadius: { xs: 1, sm: 2 },
                p: { xs: 2, sm: 2.5, xl: 3 },
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  mb: { xs: 2, sm: 2.5 }
                }}>
                  <StarIcon sx={{ 
                    color: '#ffd700',
                    fontSize: { xs: '1.5rem', sm: '1.8rem' }
                  }} />
                  <Typography 
                    variant={isMobile ? "subtitle1" : "h6"} 
                    sx={{ 
                      fontWeight: 600, 
                      color: '#1a237e',
                      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                    }}
                  >
                    Featured Brands
                  </Typography>
                </Box>
                <Stack spacing={{ xs: 1, sm: 1.5 }}>
                  {[
                    { name: 'Apple', icon: '🍎', color: '#E44D26' },
                    { name: 'Samsung', icon: '📱', color: '#1428A0' },
                    { name: 'Sony', icon: '🎮', color: '#000000' },
                    { name: 'Microsoft', icon: '💻', color: '#00A4EF' },
                    { name: 'Google', icon: '🔍', color: '#4285F4' }
                  ].map((brand) => (
                    <Box
                      key={brand.name}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 1, sm: 2 },
                        p: { xs: 1.5, sm: 2 },
                        borderRadius: 1,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: brand.color,
                          color: 'white',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      <Typography sx={{ 
                        fontSize: { xs: '1.2rem', sm: '1.4rem' }
                      }}>
                        {brand.icon}
                      </Typography>
                      <Typography sx={{ 
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        fontWeight: 500
                      }}>
                        {brand.name}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Special Offer Banner */}
              <Box sx={{
                background: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
                borderRadius: { xs: 1, sm: 2 },
                p: { xs: 2, sm: 2.5, xl: 3 },
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <LocalOfferIcon sx={{ 
                  position: 'absolute',
                  top: -10,
                  right: -10,
                  fontSize: '5rem',
                  opacity: 0.1,
                  transform: 'rotate(45deg)'
                }} />
                <Typography 
                  variant={isMobile ? "subtitle1" : "h6"} 
                  sx={{ 
                    mb: { xs: 1, sm: 1.5 }, 
                    fontWeight: 600,
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                  }}
                >
                  Special Offer
                </Typography>
                <Typography 
                  variant={isMobile ? "h5" : "h4"} 
                  sx={{ 
                    fontWeight: 800, 
                    mb: { xs: 1, sm: 1.5 },
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                  }}
                >
                  20% OFF
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: { xs: 2, sm: 2.5 },
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    opacity: 0.9
                  }}
                >
                  On all electronics this week!
                </Typography>
                <Box
                  component="button"
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    border: 'none',
                    borderRadius: 2,
                    py: { xs: 1, sm: 1.5 },
                    px: { xs: 3, sm: 4 },
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  Shop Now
                </Box>
              </Box>
            </Stack>
          </Grid>

          {/* Right Space for XL screens */}
          {isExtraLarge && (
            <Grid item xl={3} />
          )}
        </Grid>
      </Container>
    </Box>
  );
}