/**
 * The `connectDb` function connects to a MongoDB database using the provided connection string.
 */
// import mongoose from 'mongoose';

// const connectDb = async () => {
//     try{
//         const connect = await mongoose.connect(process.env.CONNECTION_STRING,);
//         console.log(`MongoDB connected: ${connect.connection.host}, ${connect.connection.name}`);
//     }catch (err){
//         console.error(err.message);
//         process.exit(1);
//     }
// };

// export default connectDb;

import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
            // Set the timeout for database operations (in milliseconds)
            serverSelectionTimeoutMS: 5000, // Example: 5 seconds
            socketTimeoutMS: 45000, // Example: 45 seconds
        });
        console.log(`MongoDB connected: ${connect.connection.host}, ${connect.connection.name}`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDb;
