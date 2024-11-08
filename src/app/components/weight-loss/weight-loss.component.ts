import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { NgIf } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-weight-loss',
  standalone: true,
  imports: [NgIf],
  templateUrl: './weight-loss.component.html',
  styleUrl: './weight-loss.component.scss',
})
export class WeightLossComponent {
  onbordingUrl: any;
  loading = false;
  constructor(
    private authService: AuthService,
    private domsanitizer: DomSanitizer
  ) {}
  startAssessment() {
    this.loading=true;
    this.authService.getToken().subscribe((res: any) => {
      if (res?.access_token) {
        this.authService
          .createVoucher(res.access_token)
          .subscribe((res: any) => {
            if (res.onboarding_url) {
              this.onbordingUrl =
                this.domsanitizer.bypassSecurityTrustResourceUrl(
                  res.onboarding_url
                );
                this.loading=false;
            }
          });
      }
    });
  }
}
