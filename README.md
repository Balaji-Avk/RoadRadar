
# Road Radar

## Overview
A prototype made to identify potholes on the streets by using an ultrasound sensor installed on street lights. The purpose of this is to give out instant data on positions with potholes in order to enhance the road maintenance and security.

## Features
- **Real-time pothole detection**: Utilizes an ultrasonic sensor to detect potholes.
- **User-friendly web interface**: Enables visualization of pothole data and allows government officials to update information.

## System Architecture
1. **Ultrasonic Sensor**: Detects potholes on the road.
2. **Arduino Uno**: Receives data from the ultrasonic sensor.
3. **ESP32**: Transmits data from the Arduino Uno to the backend server.
4. **Backend Server**: Uses serverless architecture Cloudflare Workers.
5. **Database**: Data storage and management with PostgreSQL and Prisma ORM.
6. **Frontend**: Web interface built with React.js and Tailwind CSS.

## Technology Stack
- **Hardware**: Ultrasonic Sensor, Arduino Uno, ESP32
- **Backend**: Node js, Hono library, PostgreSQL, Prisma ORM
- **Frontend**: React.js, Tailwind CSS

## Installation

### Hardware Setup
1. Connect the ultrasonic sensor to the Arduino Uno.
2. Connect the Arduino Uno to the ESP32 for data transmission.
3. Make sure the connections are same as in the picture :
![image](https://github.com/Balaji-Avk/RoadRadar/assets/132835499/a48d05a6-5cca-4b42-b79a-d360b4aac7fd)


### Backend Setup
1. Clone the repository
2. Navigate to the backend directory:
    ```bash
    cd roadradar/backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables for Cloudflare Workers and PostgreSQL.
5. Deploy the backend using Cloudflare Workers.

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd roadradar/frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```
