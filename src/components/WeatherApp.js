// src/components/WeatherApp.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Paper } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WeatherApp = () => {
  // Dummy data for the week's weather
  const [weatherData] = useState([
    { day: 'Mon', temp: 25, rainfall: 0.5, humidity: 60 },
    { day: 'Tue', temp: 24, rainfall: 0.7, humidity: 65 },
    { day: 'Wed', temp: 26, rainfall: 0.3, humidity: 55 },
    { day: 'Thu', temp: 27, rainfall: 0.4, humidity: 50 },
    { day: 'Fri', temp: 28, rainfall: 0.2, humidity: 45 },
    { day: 'Sat', temp: 29, rainfall: 0.6, humidity: 70 },
    { day: 'Sun', temp: 30, rainfall: 0.8, humidity: 75 },
  ]);

  // Calculate averages
  const avgTemp = weatherData.reduce((acc, curr) => acc + curr.temp, 0) / weatherData.length;
  const avgRainfall = weatherData.reduce((acc, curr) => acc + curr.rainfall, 0) / weatherData.length;
  const avgHumidity = weatherData.reduce((acc, curr) => acc + curr.humidity, 0) / weatherData.length;
  const currentTemp = weatherData[weatherData.length - 1].temp;

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Weather Dashboard</Typography>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Avg Temp of Week</Typography>
              <Typography variant="h3">{avgTemp.toFixed(1)}°C</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Avg Rainfall of Week</Typography>
              <Typography variant="h3">{avgRainfall.toFixed(1)} mm</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Avg Humidity of Week</Typography>
              <Typography variant="h3">{avgHumidity.toFixed(1)}%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Current Temp</Typography>
              <Typography variant="h3">{currentTemp}°C</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Average Temperature of Previous Week</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weatherData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="temp" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Notes</Typography>
              <Paper elevation={3} style={{ padding: '8px', marginTop: '8px' }}>
                {/* Add/Delete functionality for notes can be implemented here */}
                {/* You can use TextFields and Buttons to add and delete notes */}
              </Paper>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default WeatherApp;
