# Intelligent Solar Panel System

This repository contains the codebase for the Intelligent Solar Panel System, developed as part of a Bachelor's Thesis. The project aims to optimize solar energy collection through intelligent tracking and monitoring mechanisms.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [System Architecture](#system-architecture)
- [Hardware Components](#hardware-components)
- [Software Components](#software-components)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Intelligent Solar Panel System is designed to enhance the efficiency of solar panels by implementing smart tracking algorithms that adjust the panel's position based on the sun's trajectory. Additionally, the system monitors various environmental parameters to ensure optimal performance.

## Features

- **Sun Tracking**: Dynamically adjusts the solar panel's orientation to maximize sunlight exposure.
- **Environmental Monitoring**: Collects data on temperature, light intensity, and other relevant metrics.
- **Data Visualization**: Provides real-time graphs and analytics of the system's performance.

## System Architecture

The system comprises both hardware and software components working in tandem to achieve intelligent solar tracking and monitoring.

### Hardware Components

- **Microcontroller**: Serves as the central processing unit for the system.
- **Sensors**:
  - **Light Sensors**: Measure the intensity of sunlight from different directions.
  - **Temperature Sensors**: Monitor the operating temperature of the solar panels.
- **Actuators**:
  - **Servo Motors**: Adjust the tilt and orientation of the solar panels based on control signals from the microcontroller.
- **Power Supply**: Ensures a stable power source for all components.

### Software Components

- **Firmware**: Embedded C/C++ code running on the microcontroller to interface with sensors and actuators.
- **Control Algorithms**: Implement sun-tracking logic to determine optimal panel orientation.
- **Data Logging**: Records environmental data and system performance metrics.
- **User Interface**: Web-based dashboard for real-time data visualization and system control.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/cenanionut/solarpower.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd solarpower
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

   Ensure that you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system.

## Usage

1. **Connect Hardware**: Assemble the hardware components as per the circuit diagrams provided in the `docs` directory.

2. **Upload Firmware**: Use an appropriate IDE (e.g., Arduino IDE) to upload the firmware to the microcontroller.

3. **Start the Application**:

   ```bash
   npm start
   ```

4. **Access the Dashboard**: Open your web browser and navigate to `http://localhost:3000` to interact with the system's user interface.

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
