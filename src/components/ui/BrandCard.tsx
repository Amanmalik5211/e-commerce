'use client';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Rating,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { BrandCardType } from '@/types';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
}));

const PriceChip = styled(Chip)(() => ({
  background: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
  color: 'white',
  fontWeight: 600,
  '& .MuiChip-icon': {
    color: 'white',
  },
}));

export default function BrandCard({ 
  title, 
  image, 
  description, 
  price,
  rating,
  discount,
  tags = ['New', 'Featured'],
  isMobile = false 
}: BrandCardType) {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledCard elevation={2}>
      <CardMedia
        component="img"
        sx={{
          width: isExtraSmall ? 100 : isMobile ? 140 : 200,
          height: isExtraSmall ? 100 : isMobile ? 140 : 200,
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
        image={image}
        alt={title}
      />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        width: '100%',
        position: 'relative',
      }}>
        <CardContent sx={{ 
          flex: '1 0 auto', 
          p: isExtraSmall ? 1 : isMobile ? 1.5 : 2,
        }}>
          <Box sx={{ 
            display: 'flex', 
            gap: 0.5, 
            mb: isExtraSmall ? 0.5 : 1,
            flexWrap: 'wrap'
          }}>
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size={isExtraSmall ? "small" : "medium"}
                sx={{
                  bgcolor: 'primary.light',
                  color: 'white',
                  fontSize: isExtraSmall ? '0.65rem' : isMobile ? '0.75rem' : '0.875rem',
                }}
              />
            ))}
          </Box>
          <Typography 
            variant={isExtraSmall ? "body1" : isMobile ? "h6" : "h5"} 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              fontSize: isExtraSmall ? '0.9rem' : isMobile ? '1rem' : '1.25rem',
              mb: isExtraSmall ? 0.5 : 1,
              color: '#1a237e',
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              fontSize: isExtraSmall ? '0.75rem' : isMobile ? '0.875rem' : '1rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              mb: isExtraSmall ? 0.5 : 1,
            }}
          >
            {description}
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            mt: 'auto',
            flexWrap: isExtraSmall ? 'wrap' : 'nowrap',
            gap: isExtraSmall ? 0.5 : 1,
          }}>
            <Box>
              <Rating 
                value={rating} 
                readOnly 
                size={isExtraSmall ? "small" : "medium"}
                sx={{ mb: 0.5 }}
              />
              <PriceChip
                icon={<LocalOfferIcon />}
                label={`$${price}`}
                size={isExtraSmall ? "small" : "medium"}
              />
            </Box>
            {discount && (
              <Chip
                label={`${discount}% OFF`}
                color="error"
                size={isExtraSmall ? "small" : "medium"}
                sx={{ 
                  fontWeight: 600,
                  fontSize: isExtraSmall ? '0.65rem' : '0.75rem',
                }}
              />
            )}
          </Box>
        </CardContent>
      </Box>
    </StyledCard>
  );
}