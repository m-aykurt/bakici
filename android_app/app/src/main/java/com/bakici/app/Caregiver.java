package com.bakici.app;

public class Caregiver {
    private int id;
    private String name;
    private String type;
    private float rating;
    private int reviews;
    private int imageResId;
    private String location;
    private int hourlyRate;
    private int experience;
    
    public Caregiver(int id, String name, String type, float rating, int reviews, 
                     int imageResId, String location, int hourlyRate, int experience) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.rating = rating;
        this.reviews = reviews;
        this.imageResId = imageResId;
        this.location = location;
        this.hourlyRate = hourlyRate;
        this.experience = experience;
    }
    
    // Getters
    public int getId() {
        return id;
    }
    
    public String getName() {
        return name;
    }
    
    public String getType() {
        return type;
    }
    
    public float getRating() {
        return rating;
    }
    
    public int getReviews() {
        return reviews;
    }
    
    public int getImageResId() {
        return imageResId;
    }
    
    public String getLocation() {
        return location;
    }
    
    public int getHourlyRate() {
        return hourlyRate;
    }
    
    public int getExperience() {
        return experience;
    }
}