module.exports = (sequelize, Types) =>{
    const Carousel = sequelize.define('Carousel',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Types.INTEGER,
        },
        imagen: {
            type: Types.TEXT,
        }
    },
    {
        tableName: "carousel",
        underscored: true,
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',  
    });

    return Carousel;
}

