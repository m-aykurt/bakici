package com.bakici.app;

import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {
    
    private Spinner caregiversTypeSpinner;
    private EditText locationEditText;
    private Button searchButton;
    private RecyclerView featuredCaregiversRecyclerView;
    private CaregiverAdapter caregiverAdapter;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        // Initialize UI components
        caregiversTypeSpinner = findViewById(R.id.spinner_caregiver_type);
        locationEditText = findViewById(R.id.edit_location);
        searchButton = findViewById(R.id.button_search);
        featuredCaregiversRecyclerView = findViewById(R.id.recycler_featured_caregivers);
        
        // Setup caregiver type spinner
        setupCaregiverTypeSpinner();
        
        // Setup search button
        setupSearchButton();
        
        // Setup featured caregivers RecyclerView
        setupFeaturedCaregivers();
    }
    
    private void setupCaregiverTypeSpinner() {
        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(
                this, 
                R.array.caregiver_types, 
                android.R.layout.simple_spinner_item
        );
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        caregiversTypeSpinner.setAdapter(adapter);
    }
    
    private void setupSearchButton() {
        searchButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String selectedType = caregiversTypeSpinner.getSelectedItem().toString();
                String location = locationEditText.getText().toString();
                
                // In a real app, this would navigate to search results
                Toast.makeText(
                    MainActivity.this,
                    "Searching for " + selectedType + " in " + location,
                    Toast.LENGTH_SHORT
                ).show();
            }
        });
    }
    
    private void setupFeaturedCaregivers() {
        // Set layout manager
        featuredCaregiversRecyclerView.setLayoutManager(
            new LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false)
        );
        
        // Create and set adapter with mock data
        List<Caregiver> featuredCaregivers = getMockCaregivers();
        caregiverAdapter = new CaregiverAdapter(featuredCaregivers);
        featuredCaregiversRecyclerView.setAdapter(caregiverAdapter);
    }
    
    private List<Caregiver> getMockCaregivers() {
        List<Caregiver> caregivers = new ArrayList<>();
        
        caregivers.add(new Caregiver(
            1,
            "Ayşe Yılmaz",
            "Bebek Bakıcısı",
            4.9f,
            58,
            R.drawable.placeholder_profile,
            "Kadıköy, İstanbul",
            150,
            5
        ));
        
        caregivers.add(new Caregiver(
            2,
            "Mehmet Demir",
            "Yaşlı Bakıcısı",
            4.7f,
            42,
            R.drawable.placeholder_profile,
            "Beşiktaş, İstanbul",
            180,
            7
        ));
        
        caregivers.add(new Caregiver(
            3,
            "Zeynep Kaya",
            "Bebek Bakıcısı",
            4.8f,
            63,
            R.drawable.placeholder_profile,
            "Ataşehir, İstanbul",
            140,
            4
        ));
        
        caregivers.add(new Caregiver(
            4,
            "Ali Şahin",
            "Yaşlı Bakıcısı",
            4.9f,
            51,
            R.drawable.placeholder_profile,
            "Bakırköy, İstanbul",
            170,
            8
        ));
        
        return caregivers;
    }
}