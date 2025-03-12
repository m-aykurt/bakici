package com.bakici.app;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.RatingBar;
import android.widget.TextView;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import java.util.List;

public class CaregiverAdapter extends RecyclerView.Adapter<CaregiverAdapter.CaregiverViewHolder> {
    
    private List<Caregiver> caregivers;
    
    public CaregiverAdapter(List<Caregiver> caregivers) {
        this.caregivers = caregivers;
    }
    
    @NonNull
    @Override
    public CaregiverViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item_caregiver, parent, false);
        return new CaregiverViewHolder(view);
    }
    
    @Override
    public void onBindViewHolder(@NonNull CaregiverViewHolder holder, int position) {
        Caregiver caregiver = caregivers.get(position);
        
        holder.imageView.setImageResource(caregiver.getImageResId());
        holder.nameTextView.setText(caregiver.getName());
        holder.typeTextView.setText(caregiver.getType() + " · " + caregiver.getExperience() + " yıl deneyim");
        holder.ratingBar.setRating(caregiver.getRating());
        holder.ratingTextView.setText(String.valueOf(caregiver.getRating()));
        holder.reviewsTextView.setText("(" + caregiver.getReviews() + " yorum)");
        holder.locationTextView.setText(caregiver.getLocation());
        holder.priceTextView.setText(caregiver.getHourlyRate() + " ₺/saat");
        
        holder.viewProfileButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // In a real app, this would navigate to the caregiver profile
                Toast.makeText(
                    v.getContext(),
                    "Viewing profile of " + caregiver.getName(),
                    Toast.LENGTH_SHORT
                ).show();
            }
        });
    }
    
    @Override
    public int getItemCount() {
        return caregivers.size();
    }
    
    public static class CaregiverViewHolder extends RecyclerView.ViewHolder {
        ImageView imageView;
        TextView nameTextView;
        TextView typeTextView;
        RatingBar ratingBar;
        TextView ratingTextView;
        TextView reviewsTextView;
        TextView locationTextView;
        TextView priceTextView;
        Button viewProfileButton;
        
        public CaregiverViewHolder(@NonNull View itemView) {
            super(itemView);
            
            imageView = itemView.findViewById(R.id.image_caregiver);
            nameTextView = itemView.findViewById(R.id.text_name);
            typeTextView = itemView.findViewById(R.id.text_type);
            ratingBar = itemView.findViewById(R.id.rating_bar);
            ratingTextView = itemView.findViewById(R.id.text_rating);
            reviewsTextView = itemView.findViewById(R.id.text_reviews);
            locationTextView = itemView.findViewById(R.id.text_location);
            priceTextView = itemView.findViewById(R.id.text_price);
            viewProfileButton = itemView.findViewById(R.id.button_view_profile);
        }
    }
}